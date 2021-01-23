import React from 'react';
import { useHistory } from 'react-router-dom';
import './Cart.css';
import { connect } from 'react-redux'

const Cart = (props) => {

    const history = useHistory();
    const confirmOrder = () => {
        history.push('/confirmOrder')
    }
    const reviewOrder = () => {
        history.push('/reviewOrder')
    }

    const price = props.cart.reduce((total, product) => total + (product.price) * product.quantity, 0);
    const shipping = props.cart.reduce((total, product) => total + (product.shipping) * product.quantity, 0);
    const total = price + shipping;

    const twoDecimal = num => num.toFixed(2);
    
    return (
        <div>
            <h5>Order Summary</h5>
            <table>
                <tr>
                    <td>Items ordered</td>
                    <td>${props.cart.length}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>${twoDecimal(price)}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>${twoDecimal(shipping)}</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>${twoDecimal(total)}</th>
                </tr>
            </table>
            {
                props.review
                ? <button onClick={confirmOrder} className='review-order-btn'>CONFIRM ORDER</button>
                : <button onClick={reviewOrder} className='review-order-btn'>REVIEW ORDER</button>
            }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.products,
        review: ownProps.review
    }
}

export default connect(
    mapStateToProps,
    null
)(Cart);