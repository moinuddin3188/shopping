import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {

    const a = [1, 1, 1, 1]

    return (
        <section className='products container mt-5 mb-5'>
            <h1>Collections</h1>
            <div className="row">
                {
                    a.map(() => <ProductCard buy />)
                }
            </div>
        </section>
    );
};

export default Products;