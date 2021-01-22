import React, { useEffect, useState } from 'react';
import fakeData, { shuffle } from '../../../fakeData';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
        .then(res => res.json())
        .then(data => {
            shuffle(data)
            setProduct(data)
        })
    }, [])

    const products = product.slice(0, 12);

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