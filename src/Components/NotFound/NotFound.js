import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <div className="mt-4 text-center">
                <img src="https://i.imgur.com/iY03dIr.png" alt="" />
            </div>
            <div className="text-center mt-3">
                <Link to="/">
                    <button className='buy-now-btn rounded-0'>Home</button>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;