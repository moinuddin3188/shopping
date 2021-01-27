import React, { useEffect, useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import './Categories.css';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <section className="categories container mt-5">
            <h1>Categories</h1>
            {
                categories.length < 1 ?
                    <Preloader /> :
                    <div className="row">
                        {
                            categories.map(category => <CategoryCard category={category} />)
                        }
                    </div>
            }
        </section>
    );
};

export default Categories;