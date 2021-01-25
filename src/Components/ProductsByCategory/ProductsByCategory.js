import React, { useEffect } from 'react';
import './ProductByCategory.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCategory } from '../../Redux/Category/CategoryAction';
import Navbar from '../Home/Navbar/Navbar';
import ProductCard from '../Home/Products/ProductCard';
import Footer from '../Home/Footer/Footer';

const ProductsByCategory = ({ products, fetchProducts }) => {

    const { category } = useParams();

    useEffect(() => {
        fetchProducts(category)
    }, [])

    return (
        <>
            <section>
                <div style={{ backgroundColor: '#fffbf0', boxShadow: '2px 2px 8px lightgray' }}>
                    <div className="container">
                        <Navbar />
                    </div>
                </div>
                <div className='products-by-category container'>
                    <h1>{category}s</h1>
                    <div className="row">
                        {
                            products.map(product =>
                                <ProductCard
                                    product={product}
                                    buy
                                />
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const mapStateToProps = state => {
    return {
        products: state.category.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (category) => dispatch(fetchCategory(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsByCategory);