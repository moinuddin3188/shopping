import React, { useEffect } from 'react';
import './SearchResult.css';
import Navbar from '../Home/Navbar/Navbar';
import { connect } from 'react-redux';
import ProductCard from '../Home/Products/ProductCard';
import { fetchSearchResult } from '../../Redux/Search/SearchAction';
import { useParams } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Footer from '../Home/Footer/Footer';

const SearchResult = ({ products, fetchSearchProducts }) => {

    const { keyWord } = useParams();

    useEffect(() => {
        fetchSearchProducts(keyWord)
    }, [keyWord])

    return (
        <>
            <div style={{ backgroundColor: '#fffbf0', boxShadow: '2px 2px 8px lightgray' }}>
                <div className="container">
                    <Navbar />
                </div>
            </div>
            <section className='search-result container'>
                <h1>Search Results</h1>
                {
                    products.loading ? (
                        <Preloader />
                    ) : (
                            <div className="row">
                                {
                                    products && products.products.map(product =>
                                        <ProductCard
                                            product={product}
                                            buy
                                        />
                                    )
                                }
                            </div>
                        )
                }
            </section>
            <Footer />
        </>
    );
};

const mapStateToProps = state => {
    return {
        products: state.search
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchProducts: (keyWord) => dispatch(fetchSearchResult(keyWord))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResult);