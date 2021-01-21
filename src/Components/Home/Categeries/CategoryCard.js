import React from 'react';
import './CategoryCard.css';
import img from '../../../Images/Daco_1703273 1.png'
import img2 from '../../../Images/SeekPng 1.png'

const CategoryCard = () => {
    return (
        <div className="col-3 px-2">
            <div class="card">
                <div className="text-center">
                    <img width="70%" src={img2} class="" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Clothes</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                    <small className='color'>See all ⟶</small>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;