import React from 'react';
import Categories from './Categeries/Categories';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Products from './Products/Products';

const Home = () => {
    return (
        <main>
            <Header />
            <Categories />
            <Products />
            <Footer />
        </main>
    );
};

export default Home;