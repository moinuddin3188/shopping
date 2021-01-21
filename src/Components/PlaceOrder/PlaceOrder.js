import React from 'react';
import './PlaceOrder.css';
import Navbar from '../Home/Navbar/Navbar';
import img from '../../Images/SeekPng 1.png';


const PlaceOrder = () => {
    const a = [1, 1, 1]
    return (
        <section className='place-order'>
            <div className="container">
                <Navbar />
                <h1>Place your order</h1>
                <div className="row my-5">
                    <div className="col-5 px-5 delivery-details">
                        <h6 className="border-bottom pb-2 mb-3">Edit Delivery Details</h6>
                        <form action="">
                            <input type="text" /><br />
                            <input type="text" /><br />
                            <input type="text" /><br />
                            <input type="text" /><br />
                            <input type="text" /><br />
                            <input type="submit" value="Save & Continue" />
                        </form>
                    </div>
                    <div className="col-4 offset-3 mt-4">
                        {
                            a.map(() =>
                                <div className="ordered-items row mb-2">
                                    <div className="col-4 d-flex align-items-center">
                                        <img width="100%" src={img} alt="" />
                                    </div>
                                    <div className="col-8 d-flex align-items-center px-0">
                                        <div>
                                            <p className="mb-1">Lorem ipsum, dolor sit amet consec adipi elit it omnis.</p>
                                            <h6 className="color mb-1">$120</h6>
                                            <small>Quantity: 1</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <div className="d-flex">
                            <p>Total:</p>
                            <p className="ml-auto color">$120</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaceOrder;