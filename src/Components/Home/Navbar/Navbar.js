import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData';


const Navbar = () => {
    return (
        <nav class="row py-4">
            <div className="col-auto pl-0">
                <Link to='/'>
                    <img width='150px' src={logo} alt="" />
                </Link>
            </div>
            <div className="col d-flex align-items-center pr-0 pl-5">
                <input type="text" placeholder='Search your product...' />
            </div>
            <div className="col-auto d-flex align-items-center pl-0 pr-5">
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="col-auto d-flex align-items-center cart pl-0">
                <Link to="/reviewOrder">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </div>
            <div className="col-auto d-none d-md-block p-0 pt-3">
                <a className='text-decoration-none' href="">About us</a>
            </div>
        </nav>
    );
};

export default Navbar;