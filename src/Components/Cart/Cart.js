import React from 'react';
import './Cart.css';

const Cart = (props) => {
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
                ? <button className='review-order-btn'>CONFIRM ORDER</button>
                : <button className='review-order-btn'>REVIEW ORDER</button>
            }
        </div>
    );
};

export default Cart;