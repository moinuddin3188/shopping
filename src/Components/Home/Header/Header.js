import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import Featured from '../Featured/Featured';


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Navbar />
                <Featured />
            </div>
        </header>
    );
};

export default Header;