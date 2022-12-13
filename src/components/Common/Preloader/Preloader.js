import React from 'react';
import { Space, Spin } from 'antd';

const Preloader = () => (
    <Space size="large" style={{display: 'flex', justifyContent: "center", alignItems: "center ", width: "100%"}}>
        <Spin size="large" />
    </Space>
);

export default Preloader;