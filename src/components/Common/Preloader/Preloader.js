import React from 'react';
import {Space, Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{fontSize: 80}} spin/>

const Preloader = () => (
    <Space style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center ',
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        backgroundColor: 'rgba(1,26,103,0.1)',
        zIndex: '5'
    }}>
        <Spin indicator={antIcon}/>
    </Space>
);

export default Preloader;