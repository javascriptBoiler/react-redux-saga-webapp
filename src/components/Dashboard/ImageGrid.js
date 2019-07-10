import React from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../../actions';
import { Card } from 'antd';
import './styles.css';

const { Meta } = Card;

const ImageGrid = (prop) => {
    // componentDidMount() {
    //     this.props.loadImages();
    // }

    const { user } = prop
    const { avatar, email, first_name, last_name } = user

    return (
        <div className="content">
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={avatar}
                    />
                }
            >
                <Meta
                    title="My profile"
                    description={`my name is ${first_name} ${last_name}. contact me from ${email}`}
                />
            </Card>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
