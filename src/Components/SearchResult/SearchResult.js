import React, { useEffect } from 'react';
import './SearchResult.css';
import Navbar from '../Home/Navbar/Navbar';
import { connect } from 'react-redux';
import ProductCard from '../Home/Products/ProductCard';
import { fetchSearchResult } from '../../Redux/Search/SearchAction';
import { useParams } from 'react-router-dom';

const SearchResult = ({ products, fetchSearchProducts }) => {

    const { keyWord } = useParams();

    useEffect(() => {
        fetchSearchProducts(keyWord)
    })

    return (
        <>
            <div style={{ backgroundColor: '#fffbf0', boxShadow: '2px 2px 8px lightgray' }}>
                <div className="container">
                    <Navbar />
                </div>
            </div>
            <section className='search-result container'>
                <h1>Search Results</h1>
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
            </section>
        </>
    );
};

const mapStateToProps = state => {
    return {
        products: state.search.products
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