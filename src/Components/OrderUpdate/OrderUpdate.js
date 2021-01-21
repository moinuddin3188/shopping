import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './OrderUpdate.css';
import bike from '../../Images/Group 1151.png';
import img from '../../Images/Group 1152.png';

const OrderUpdate = () => {
    return (
        <section className="order-update container">
            <Navbar />
            <h1>Shipping update</h1>
            <div className="row my-5">
                <div className="col-5">

                </div>
                <div className="col-4 offset-3 delivery-details-raider p-3">
                    <img className="ml-4 w-25" src={bike} alt="" />
                    <div className="bg-white delivery-details-raider p-2 px-3 my-3">
                        <div className='d-flex'>
                            <div className="circle"></div>
                            <div>
                                <p className='m-0 label'>Your location</p>
                            </div>
                        </div>
                        <div className='content border-left'>
                            <small>Lorem ipsum</small>
                        </div>
                        <div className='connector border-left'></div>
                        <div className='d-flex'>
                            <div className="circle"></div>
                            <div>
                                <p className='m-0 label'>Your location</p>
                            </div>
                        </div>
                        <div className='content'>
                            <small>Lorem ipsum</small>
                        </div>
                    </div>
                    <h5 className="mb-0">09:00</h5>
                    <small className="text-black-50">Delivery Time</small>
                    <div className="d-flex bg-white delivery-details-raider p-2 px-3 mt-3">
                        <img width='20%' src={img} alt="" />
                        <div className='pl-3'>
                            <p className='m-0 mt-2'>Hamim</p>
                            <small>Your raider</small>
                        </div>
                    </div>
                    <button className='buy-now-btn w-100 mt-3'>Contact</button>
                </div>
            </div>
        </section>
    );
};

export default OrderUpdate;