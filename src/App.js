import React from 'react';
import 'antd/dist/antd.css';
import RegistrationForm from "./Components/RegistrationForm";
import {Layout} from "antd";

const {Content} = Layout;

const App = () => {
    return (
        <Layout className="layout">
            <Content style={{padding: '30px 60px 0px 60px'}}>
                <div className="site-layout-content">
                    <RegistrationForm/>
                </div>
            </Content>
        </Layout>
    )

}

export default App
