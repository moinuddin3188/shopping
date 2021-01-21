import React from 'react';
import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const ProductCard = (props) => {

    const { key, price, name, img } = props.product;

    const a = [1, 1, 1, 1, 1]

    const history = useHistory()
    const showDetails = () => {
        history.push(`/details/${key}`)
    }

    return (
        <div className={props.buy ? 'col-3 px-2 mb-4' : 'col-4 px-2 mb-4'}>
            <div class="card">
                <div className="text-center pt-2">
                    <img width="70%" src={img} alt="..." />
                </div>
                <div class="card-body">
                    <p class="card-text">{name.slice(0, 35)}....</p>
                    <div className="d-flex">
                        <div className="d-flex align-items-center">
                            <h5 className="m-0" style={{color: '#fa804c'}}>${price}</h5>
                        </div>
                        <div className="ml-auto">
                            {
                                props.buy 
                                ? <button onClick={showDetails} className='buy-now-btn'>BYU NOW</button>
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