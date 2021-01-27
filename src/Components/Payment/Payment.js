import React from 'react';
import './Payment.css';
import Navbar from '../Home/Navbar/Navbar';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import Footer from '../Home/Footer/Footer';


const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


const Payment = () => {
    return (
        <>
            <section style={{ backgroundColor: '#fffbf0', boxShadow: '2px 2px 8px lightgray' }}>
                <div className="container">
                    <Navbar />
                </div>
            </section>
            <section className='container payment mb-5'>
                <h1>Payment</h1>
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            </section>
            <Footer />
        </>
    );
};


export default Payment;