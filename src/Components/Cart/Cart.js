import React from 'react';
import { useHistory } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const history = useHistory();
    const confirmOrder = () => {
        history.push('/confirmOrder')
    }
    const reviewOrder = () => {
        history.push('/reviewOrder')
    }
    return (
        <div>
            <h5>Order Summary</h5>
            <table>
                <tr>
                    <td>Items ordered</td>
                    <td>$00</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>$00</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>$00</td>
                </tr>
                <tr>
                    <th>Total</th>
                    <th>$00</th>
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

export default Cart;