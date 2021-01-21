import React from 'react';
import './ProductCard.css';
import img from '../../../Images/Daco_1703273 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductCard = (props) => {
    const a = [1, 1, 1, 1, 1]
    return (
        <div className={props.buy ? 'col-3 px-2 mb-4' : 'col-4 px-2 mb-4'}>
            <div class="card">
                <div className="text-center">
                    <img width="70%" src={img} alt="..." />
                </div>
                <div class="card-body">
                    <p class="card-text">Lorem ipsum, dolor sit amet conse adipi elit.</p>
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <h5 className="m-0" style={{color: '#fa804c'}}>$980</h5>
                        </div>
                        <div className="ml-auto">
                            {
                                props.buy 
                                ? <button className='buy-now-btn'>BYU NOW</button>
                                : <button className='buy-now-btn'>REMOVE</button>
                            }
                        </div>
                    </div>
                </div>
                <div class="card-footer border-0">
                    <small>
                        {
                            a.map(() => <FontAwesomeIcon color='orange' icon={faStar} />)
                        }
                        <span className="ml-2">(9)</span>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;