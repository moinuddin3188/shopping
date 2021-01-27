import React, { useEffect, useState } from 'react';
import fakeData, { shuffle } from '../../../fakeData';
import Preloader from '../../Preloader/Preloader';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {

    const [display, setDisplay] = useState(12)
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("https://tranquil-ocean-43316.herokuapp.com/allProducts")
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
            {
                product.length < 1 ?
                    <Preloader /> :
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
            }
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