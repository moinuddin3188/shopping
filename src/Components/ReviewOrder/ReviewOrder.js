import React from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Home/Navbar/Navbar';
import ProductCard from '../Home/Products/ProductCard';
import './ReviewOrder.css';
import { connect } from 'react-redux'
import Footer from '../Home/Footer/Footer';


const ReviewOrder = ({ cart }) => {
    return (
        <>
            <section className="review-order pb-5">
                <div className="container">
                    <Navbar />
                    <h1>Review your order</h1>
                    <div className="row">
                        <div className="col-9">
                            <div className="row py-5">
                                {
                                    cart.map(product => <ProductCard product={product} />)
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
            <Footer />
        </>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart.products
    }
}

export default connect(
    mapStateToProps,
    null
)(ReviewOrder);