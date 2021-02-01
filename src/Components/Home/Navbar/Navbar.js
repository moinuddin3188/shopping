import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../Images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { setUserInfo } from '../../../Redux/User/UserAction';
import Cookies from 'js-cookie';


const Navbar = ({ userInfo, cart, setUserInfo }) => {

    const [keyWord, setKeyword] = useState('')

    const handleChange = e => {
        const searchValue = e.target.value.trim();
        setKeyword(searchValue)
    }

    const history = useHistory()
    const searchResult = () => {
        history.push(keyWord && `/searchResult/${keyWord}`)
    }

    const logout = () => {
        setUserInfo('', '', '');
        Cookies.remove('token');
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
                    <FontAwesomeIcon icon={faShoppingCart} /> <span className="color text-decoration-none">{cart.length}</span>
                </Link>
            </div>
            <div className={
                userInfo.email
                    ? "col-auto d-none d-md-block p-0 user-photo"
                    : "col-auto d-none d-md-block p-0 pt-3"
            }>
                {userInfo.name ?
                    <>
                        <div type='button' className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className='rounded-circle' width="28%" src={userInfo.photo} alt="" />
                        </div>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div className="text-center">
                                <h6 className="pl-2">{userInfo.name}</h6>
                            </div>
                            <button onClick={logout} className="dropdown-item" type="button">Logout</button>
                        </div>
                    </>
                    : <Link to="/login" className='text-decoration-none' href="">Login</Link>
                }
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        userInfo: state.user,
        cart: state.cart.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (email, photoUrl, name) => dispatch(setUserInfo(email, photoUrl, name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);