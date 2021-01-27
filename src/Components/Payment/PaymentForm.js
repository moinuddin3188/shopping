import React, { useState } from 'react';
import './Payment.css';
import { connect } from 'react-redux';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import { useHistory, useParams } from 'react-router-dom';

const PaymentForm = ({ cart, currentProduct, deliveryInfo }) => {

    const { number } = useParams();
    const [paymentError, setPaymentError] = useState(null)
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });

        setPaymentError(payload.error.message);

        if (payload.error.message.length > 67) {
            const orderedProduct = number === 1 ? [currentProduct] : [...cart];

            fetch('https://tranquil-ocean-43316.herokuapp.com/placeOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderStatus: 'Pending', client: deliveryInfo, ordered: orderedProduct })
            })
                .then(res => res.json())
                .then(success => {

                })

            history.push('/orderUpdate')
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                CARD NUMBER
                <CardNumberElement />
            </label>
            <div className="row mt-3">
                <div className="col-6">
                    <label>
                        EXPIRATION DATE
                        <CardExpiryElement />
                    </label>
                </div>
                <div className="col-6">
                    <label>
                        CVC
                        <CardCvcElement />
                    </label>
                </div>
            </div>
            <small className="text-danger"> {paymentError && paymentError} </small>
            <div className="text-right mt-2">
                <button className='buy-now-btn px-5 rounded-0' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        deliveryInfo: state.deliveryInfo.info,
        cart: state.cart.products,
        currentProduct: state.currentProduct.currentProduct
    }
}

export default connect(
    mapStateToProps,
    null
)(PaymentForm);