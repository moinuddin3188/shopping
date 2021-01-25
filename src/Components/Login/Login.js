import React from 'react';
import './Login.css';
import google from '../../Images/google.png';

const Login = () => {
    return (
        <section className='login d-flex justify-content-center mt-5'>
            <div style={{width: '300px'}}>
                <h6>Login</h6>
                <div className="google-sign-in mt-3">
                    <div className="row py-2">
                        <div className="col-3 p-0 pl-4 d-flex align-items-center">
                            <img className="border-right pr-2" width="70%" src={google} alt=""/>
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

export default Login;