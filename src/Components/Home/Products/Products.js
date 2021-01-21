import React from 'react';
import fakeData from '../../../fakeData';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {

    const products = fakeData.slice(0, 12);

    return (
        <section className='products container mt-5 mb-5'>
            <h1>Collections</h1>
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
    );
};

export default Products;