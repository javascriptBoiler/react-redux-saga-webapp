import React from 'react';
import { connect } from 'react-redux';

import { submitForm } from '../../../actions/user_actions';
import './styles.css';
// import Button from 'antd/es/button'
import { Card, Form, Icon, Input, Button, Alert } from 'antd';

const Login = (prop) => {

    const { submitForm, form, user } = prop
    const { getFieldDecorator, validateFields } = form
    const { errmessage, pageLoading } = user

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                submitForm(values)
            } else {
                return err;

            }
        });
    };

    return (
        <div className="content">
            {errmessage != null ? <Alert message={errmessage} type="error" style={{ marginBottom: 8 }} /> : ''}
            <Card>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('email', {
                            initialValue: 'eve.holt@reqres.in',
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            initialValue: 'cityslicka',
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={pageLoading}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = dispatch => ({
    submitForm: (val) => dispatch(submitForm(val)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form.create()(Login));

