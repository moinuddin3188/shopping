import React, { useEffect, useState } from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Home/Navbar/Navbar';
import Cart from '../Cart/Cart';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentProduct } from '../../Redux/CurrentProduct/CurrentProductAction';
import { addToCart } from '../../Redux/Cart/CartAction';


const Details = (props) => {

    const [quantity, setQuantity] = useState(1);
    const { key } = useParams();

    if (quantity < 1) {
        setQuantity(1)
    } else if (quantity > 5) {
        setQuantity(5)
    }

    const history = useHistory()
    const placeOrder = () => {
        history.push(`/quickShop/${quantity}`)
    }

    useEffect(() => {
        props.fetchProduct(key)
    }, [])

    const product = props.product;
    const { name, price, shipping, img, seller, features } = product;

    const newProduct = { ...props.product, quantity: quantity }

    return (
        <section className='details'>
            <div className="container">
                <Navbar />
                <div className="row mt-5">
                    <div className="col-4 bg-white pt-3 py-3">
                        <img width="100%" src={img} alt="" />
                    </div>
                    <div className="col-5 bg-white pt-3">
                        <div className='border-bottom pb-2'>
                            <h5>{name}</h5>
                            <small><FontAwesomeIcon color='orange' icon={faStar} /> (12) </small>
                            <small>Brand: {seller}</small>
                        </div>
                        <div className='border-bottom py-2'>
                            <h3 style={{ color: '#fa804c' }}>${price}</h3>
                            <small>Shipping cost: ${shipping}</small><br />
                            <small>Total: $124</small>
                        </div>
                        <div className='py-3'>
                            <small className='mr-5'>Quantity: </small>
                            <small onClick={() => setQuantity(quantity - 1)} className="minus">
                                <FontAwesomeIcon icon={faMinus} />
                            </small>
                            <small className="mx-4">{quantity}</small>
                            <small onClick={() => setQuantity(quantity + 1)} className="plus">
                                <FontAwesomeIcon icon={faPlus} />
                            </small> <br />
                            <div className='d-flex mt-4'>
                                <button
                                    onClick={placeOrder}
                                    className='details-buy-now-btn mr-3'
                                >
                                    BUY NOW
                                </button>
                                <button
                                    onClick={() => props.addToCart(newProduct)}
                                    className='ml-auto details-buy-now-btn ml-3'
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 cart-color border-left py-3">
                        <Cart />
                    </div>
                </div>
            </div>
            <div className="container p-0">
                <div className="mt-3 title">
                    <h6 className='m-0'>{name}</h6>
                </div>
                <div className="about-product bg-white py-4 pr-3">
                    <ul>
                        {
                            features && features.map(feature => <li>{feature.description || feature} - {feature.value}</li>)
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        product: state.currentProduct.currentProduct,
        cart: state.cart.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (key) => dispatch(fetchCurrentProduct(key)),
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);