import React from "react"
import {Divider,Button,Table} from "antd";

const TableData = ({list, onEdit}) => {
    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName'
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Action',
            render(row,data,index){
                return(
                    <>
                        <Button onClick={()=>{onEdit(data._id)}}>Edit</Button>
                    </>
                )

            }
        },
    ];
    return (
        <>
            <Divider />
            <Table
                rowkey="_id"
                columns={columns}
                dataSource={list || []}
            />
        </>
    );

}
export default TableData

