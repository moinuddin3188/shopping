import React from 'react';
import './Footer.css';

const Footer = () => {
    const a = [1, 1, 1, 1]
    return (
        <footer className='footer pt-5 pb-3'>
            <div className='container'>
                <div className="row">
                    {
                        a.map(() =>
                            <div className="col-3">
                                <p>Lorem ipsum</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Lorem, ipsum dolor.</li>
                                    <li className="list-group-item">Lorem ipsum dolor sit amet.</li>
                                    <li className="list-group-item">Lorem ipsum dolor sit.</li>
                                    <li className="list-group-item">Lorem, ipsum dolor.</li>
                                    <li className="list-group-item">Lorem ipsum dolor sit amet.</li>
                                    <li className="list-group-item">Lorem ipsum dolor sit.</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <p className="copy-right">Copy right is reserved @ <span className="color">2021</span> @ Moin uddin</p>
            </div>
        </footer>
    );
};

export default Footer;