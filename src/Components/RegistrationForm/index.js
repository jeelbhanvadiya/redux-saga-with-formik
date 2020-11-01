import React, { useEffect, useState } from 'react';
import {Col, message, Row} from 'antd';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFormik } from 'formik';
import { createUser,getUsers,updateUserDetails } from "../../actions";
import Form from "./Form";
import TableData from "./Table"

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const [list, setList] = useState([]);
    const [editId, setEditId] = useState(0);

    const products = useSelector((state) => state.users);

    useEffect(()=>{setList(products)},[products]);

    useEffect( ()=>{
        dispatch(getUsers());
    },[dispatch]);

    const updateUser = async (payload) =>{
        const res = await updateUserDetails(editId,payload);
        if(res && res.data){
            dispatch(getUsers());
            message.success("successfully updated")
        }else {
            console.log("error")
        }
    }

    const submit = async  (value) => {
        const payload = {firstName: value.firstName, lastName: value.lastName, email: value.email,emailId:value.email};
        if (editId) {
            await updateUser(payload)
        } else {
            const res = await createUser(payload);
            if(res && res.data){
                dispatch(getUsers());
                message.success("successfully created")
            }else {
                console.log("error")
            }
        }

        Object.keys(value).map(v => formik.setFieldValue(v, ""));
        setEditId(0)
    };

    const onEdit = (id) => {
        const findItem = list.find(v => v._id === id);
        Object.keys(findItem).map(v => formik.setFieldValue(v, findItem[v]));
        setEditId(id)
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
        },
        onSubmit: submit
    });

    return (
        <>
            <Row>
                <Col md={8}>
                    <Form formik={formik}/>
                </Col>
                <Col md={14} offset={1}>
                    <TableData list={list} onEdit={onEdit} />
                </Col>
            </Row>

        </>
    );
};

export default RegistrationForm

