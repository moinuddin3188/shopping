import React from 'react';
import './Login.css';
import google from '../../Images/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../Firebase/Firebase';
import { connect } from 'react-redux';
import { setUserInfo } from '../../Redux/User/UserAction';
import { useHistory, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';


firebase.initializeApp(firebaseConfig);

const Login = ({ setUserInfo }) => {

    const history = useHistory()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: '/' } };
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                setUserInfo(email, photoURL, displayName);
                history.push(from)
                getToken()
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const getToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            Cookies.set('token', idToken, { expires: 7 })
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <section className='login d-flex justify-content-center mt-5'>
            <div style={{ width: '300px' }}>
                <h6>Login</h6>
                <div onClick={handleSignIn} className="google-sign-in mt-3">
                    <div className="row py-2">
                        <div className="col-3 p-0 pl-4 d-flex align-items-center">
                            <img className="border-right pr-2" width="70%" src={google} alt="" />
                        </div>
                        <div className="col-auto p-0 d-flex align-items-center">
                            <p className="m-0 ml-4">Sign in with Google</p>
                        </div>
                    </div>
                </div>
                <button className="login-btn">Login</button>
            </div>
        </section>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        setUserInfo: (email, photoUrl, name) => dispatch(setUserInfo(email, photoUrl, name))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login);