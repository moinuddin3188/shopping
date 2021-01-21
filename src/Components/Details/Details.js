import React from 'react';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Home/Navbar/Navbar';
import Cart from '../Cart/Cart';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const Details = () => {

    const { key } = useParams();
    const history = useHistory()
    const reviewOrder = () => {
        history.push('/reviewOrder')
    }

    const { name, price, shipping, img, seller, features } = fakeData.find(product => product.key === key);

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
                            <small className="minus"><FontAwesomeIcon icon={faMinus} /></small>
                            <small className="mx-4">1</small>
                            <small className="plus"><FontAwesomeIcon icon={faPlus} /></small> <br />
                            <div className='d-flex mt-4'>
                                <button onClick={reviewOrder} className='details-buy-now-btn mr-3'>BUY NOW</button>
                                <button className='ml-auto details-buy-now-btn ml-3'>ADD TO CART</button>
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
                <div className="about-product bg-white py-4">
                    <ul>
                        {
                            features.map(feature => <li>{feature.description} - {feature.value}</li> )
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Details;