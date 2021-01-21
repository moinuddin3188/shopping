import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return (
        <nav class="row py-4">
            <div className="col-auto">
                <h3>Shopping</h3>
            </div>
            <div className="col pr-0 pl-5">
                <input type="text" placeholder='Search your product...' />
            </div>
            <div className="col-auto pl-0 pr-5">
                <button>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="col-auto cart">
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="col-auto d-none d-md-block p-0 pt-1">
                <a className='text-decoration-none' href="">About us</a>
            </div>
        </nav>
    );
};

export default Navbar;