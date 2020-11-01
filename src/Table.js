import React, {useEffect, useState} from 'react';
import {Table, Divider, Button, message,Upload} from 'antd';
import axios from "axios"
// rowSelection object indicates the need for row selection
import { UploadOutlined } from '@ant-design/icons';


const Demo = ({list,onEdit}) => {
    const [list,setList] = useState([])

    useEffect( async ()=>{
        try {
            const response = await axios.get('http://localhost:8080/fetch');
            if(response && response.data){
                setList(response.data.data)
            }
        } catch (error) {
            console.error(error);
        }
    },[])


    const props = {
        onChange(info) {
           console.log(info)
        },
    };
    const columns = [
        {
            title: 'No',
            render(data,row,index){
                return(<span>{index+1}</span>)
            }
        },
        {
            title: 'Employee_name',
            dataIndex: 'employee_name'
        },
        {
            title: 'employee_salary',
            dataIndex: 'employee_salary'
        },
        {
            title: 'employee_salary',
            dataIndex: 'employee_age'
        },
        {
            title: 'Images',
            render(row,data,index){
                return(
                    <>
                        <img src={data.profile_image} width={100} height={100}/>
                    </>
                    )

            }
        },
    ];
    return (
        <div>

            <Divider />

            <Table
                rowkey="_id"
                columns={columns}
                dataSource={list}
            />
        </div>
    );
};

export default Demo
