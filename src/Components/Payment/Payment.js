import React from 'react';
import './Payment.css';
import { connect } from 'react-redux';

const Payment = ({ deliveryInfo }) => {
    console.log(deliveryInfo)
    return (
        <div>
            <h1 className="text-align">Payment</h1>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        deliveryInfo: state.deliveryInfo.info
    }
}

export default connect(
    mapStateToProps,
    null
)(Payment);