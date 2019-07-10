// eslint-disable-next-line
import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

const about = (prop) => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <h2>This is the about page</h2>
            </div>
        </Content>
    )
}

export default about;