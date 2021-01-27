import React, { useState } from 'react';
import './PlaceOrder.css';
import Navbar from '../Home/Navbar/Navbar';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../Home/Footer/Footer';
import { deliveryInfo } from '../../Redux/Delivery/DeliveryAction';


const PlaceOrder = ({ product, cart, userInfo, deliveryInformation }) => {

    const { quantity } = useParams();
    const history = useHistory();

    const products = quantity ? [product] : [...cart];
    const total = products.reduce((total, product) => total + (product.price) * product.quantity, 0) || products[0].price * quantity;
    const shipping = products.reduce((shipping, product) => shipping + (product.shipping) * product.quantity, 0) || products[0].shipping * quantity;
    const grandTotal = total + shipping;

    const [information, setInformation] = useState(false)
    const [deliveryInfo, setDeliveryInfo] = useState({})

    const handleBlur = e => {
        const info = { ...deliveryInfo };
        info[e.target.name] = e.target.value;
        setDeliveryInfo(info)
        deliveryInformation(info)
    }

    const deleteId = array => {
        let products = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            delete element._id
            products.push(element)
        }
        return products;
    }

    const clearProducts = deleteId(products)

    const placeOrder = () => {
        fetch('https://tranquil-ocean-43316.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderStatus: 'Pending', client: userInfo, ordered: clearProducts })
        })
            .then(res => res.json())
            .then(success => {

            })

        history.push('/orderUpdate')
    }

    const payment = () => {
        history.push(`/payment/${products.length}`)
    }

    const handleSubmit = e => {
        setInformation(true);

        e.preventDefault();
    }

    return (
        <>
            <section className='place-order'>
                <div className="container">
                    <Navbar />
                    <h1>Place your order</h1>
                    <div className="row my-5">
                        <div className="col-5 px-5 delivery-details">
                            <h6 className="border-bottom pb-2 mb-3">Edit Delivery Details</h6>
                            <form onSubmit={handleSubmit}>
                                <select onBlur={handleBlur} name="payment" id="" required>
                                    <option value="onlinePayment">Online Payment</option>
                                    <option value="paymentOnDelivery">Payment on Delivery</option>
                                </select>
                                <input
                                    onBlur={handleBlur}
                                    name="location"
                                    type="text"
                                    placeholder="Location"
                                    required
                                /><br />
                                <input
                                    onBlur={handleBlur}
                                    name="flatOrFloor"
                                    type="text"
                                    placeholder="Flat, suit or floor"
                                    required
                                /><br />
                                <input
                                    onBlur={handleBlur}
                                    name="receiverName"
                                    type="text"
                                    placeholder="Receiver name"
                                    required
                                /><br />
                                <input
                                    onBlur={handleBlur}
                                    name="instruction"
                                    type="text"
                                    placeholder="Instruction for Raider"
                                /><br />
                                <input type="submit" value="Save & Continue" />
                            </form>
                        </div>
                        <div className="col-4 offset-3 mt-4">
                            {
                                products.map((product) =>
                                    <div className="ordered-items row mb-2">
                                        <div className="col-4 d-flex align-items-center">
                                            <img width="100%" src={product.img} alt="" />
                                        </div>
                                        <div className="col-8 d-flex align-items-center px-0">
                                            <div>
                                                <p className="mb-1">{product.name.slice(0, 55)}....</p>
                                                <h6 className="color mb-1">${product.price}</h6>
                                                <small>Quantity: {product.quantity || quantity}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="d-flex">
                                <p>Total <small className="text-black-50">(shipping)</small> :</p>
                                <p className="ml-auto color">${grandTotal.toFixed(2)}</p>
                            </div>
                            {
                                information ? (
                                    <button
                                        onClick={deliveryInfo.payment === 'onlinePayment' ? payment : placeOrder}
                                        className='place-order-btn'
                                    >
                                        Place Your Order
                                    </button>
                                ) : (
                                        <button
                                            disabled
                                            style={{ backgroundColor: 'lightgray' }}
                                            className='place-order-btn'
                                        >
                                            Place Your Order
                                        </button>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const mapStateToProps = state => {
    return {
        product: state.currentProduct.currentProduct,
        cart: state.cart.products,
        userInfo: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deliveryInformation: (info) => dispatch(deliveryInfo(info))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceOrder);