import React from 'react';
import { useHistory } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = (props) => {

    const { img, title, category } = props.category

    const history = useHistory()
    const seeCategory = () => {
        history.push(`/product/${category}`)
    }

    return (
        <div className="col-3 px-2">
            <div class="card">
                <div className="text-center">
                    <img width="70%" src={img} class="" alt="..." />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer border-0">
                    <small
                        onClick={seeCategory}
                        style={{cursor: 'pointer'}}
                        className='color'
                    >
                        See all ⟶
                    </small>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;