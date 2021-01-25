import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../Images/logo.png';
import { Link, useHistory } from 'react-router-dom';


const Navbar = () => {

    const [keyWord, setKeyword] = useState('')

    const handleChange = e => {
        const searchValue = e.target.value.trim();
        setKeyword(searchValue)
    }

    const history = useHistory()
    const searchResult = () => {
        history.push(keyWord && `/searchResult/${keyWord}`)
    }

    return (
        <nav class="row py-4">
            <div className="col-auto pl-0">
                <Link to='/'>
                    <img width='150px' src={logo} alt="" />
                </Link>
            </div>
            <div className="col d-flex align-items-center pr-0 pl-5">
                <input onChange={handleChange} type="text" placeholder='Search your product...' />
            </div>
            <div className="col-auto d-flex align-items-center pl-0 pr-5">
                <button onClick={searchResult}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="col-auto d-flex align-items-center cart pl-0">
                <Link to="/reviewOrder">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
            </div>
            <div className="col-auto d-none d-md-block p-0 pt-3">
                <Link to="/login" className='text-decoration-none' href="">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;