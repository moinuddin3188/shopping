import React, { useEffect, useState } from 'react';
import fakeData, { shuffle } from '../../../fakeData';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {

    const [display, setDisplay] = useState(12)
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/allProducts")
            .then(res => res.json())
            .then(data => {
                shuffle(data)
                setProduct(data)
            })
    }, [])

    const products = product.slice(0, display);

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
            <div className="text-center">
                <button
                    onClick={() => setDisplay(display + 8)}
                    className={display > 90 ? "btn border-danger disabled" : "btn border-danger"}
                >
                    LOAD MORE
                </button>
            </div>
        </section>
    );
};

export default Products;