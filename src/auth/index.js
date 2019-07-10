import React, { Component } from 'react';
import { connect } from 'react-redux';
import { callAuth } from '../actions/user_actions';
import { Spin } from 'antd';

export default function (ComposedClass, reload, adminRoute = null) {
    class AuthenticationCheck extends Component {

        componentDidMount() {
            this.props.dispatch(callAuth())
        }


        render() {
            if (this.props.user.validating) {
                return (
                    <Spin size='large' style={{ position: 'absolute', top: '45%', left: '47%' }} />
                )
            }

            if (!this.props.user.haspermition) {
                return (
                    <p>page not found</p>
                )
            }

            return (
                <ComposedClass {...this.props} user={this.props.user} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}


