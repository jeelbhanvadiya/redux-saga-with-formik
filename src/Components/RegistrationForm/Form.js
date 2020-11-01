import React from "react";
import {Button, Col, Input, Row, Card} from "antd";

const Form = ({formik}) => {
    return (
        <Card align="left" title="Form" bordered={true}>
            <Row>
                <Col>
                    <Row gutter={[8, 8]}>
                        <Col md={24}>
                            <label htmlFor="email">First Name</label>
                        </Col>
                        <Col  md={24}>
                            <Input name="firstName" type="text" onChange={formik.handleChange}
                                   value={formik.values.firstName}/>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col md={24}>
                            <label htmlFor="email">Last Name</label>
                        </Col>
                        <Col  md={24}>
                            <Input name="lastName" type="text" onChange={formik.handleChange}
                                   value={formik.values.lastName}/>
                        </Col>
                    </Row>
                    <Row gutter={[8, 16]}>
                        <Col md={24}>
                            <label htmlFor="email">Email</label>
                        </Col>
                        <Col md={24}>
                            <Input name="email" type="email" onChange={formik.handleChange}
                                   value={formik.values.email}/>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]}>
                        <Col md={12}>
                            <Button onClick={formik.handleSubmit}>Submit</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )

}
export default Form
