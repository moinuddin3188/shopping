import React from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Home/Navbar/Navbar';
import ProductCard from '../Home/Products/ProductCard';
import './ReviewOrder.css';

const ReviewOrder = () => {
    const a = [1, 1, 1, 1];
    return (
        <section className="review-order">
            <div className="container">
                <Navbar />
                <h1>Review your order</h1>
                <div className="row">
                    <div className="col-9">
                        <div className="row py-5">
                            {
                                a.map(() => <ProductCard />)
                            }
                        </div>
                    </div>
                    <div className="col-3 mt-5">
                        <div className="review-cart p-3">
                            <Cart review />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewOrder;