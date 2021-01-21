import React from 'react';
import Categories from './Categeries/Categories';
import Header from './Header/Header';
import Products from './Products/Products';

const Home = () => {
    return (
        <main>
            <Header />
            <Categories />
            <Products />
        </main>
    );
};

export default Home;