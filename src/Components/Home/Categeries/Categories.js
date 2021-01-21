import React from 'react';
import './Categories.css';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const a = [1, 1, 1, 1]

    return (
        <section className="categories container mt-5">
            <h1>Categories</h1>
            <div className="row">
                {
                    a.map(() => <CategoryCard />)
                }
            </div>
        </section>
    );
};

export default Categories;