import React from 'react';
import './FastFoodCard.css'

const FastFoodCard = (props) => {
    const { photo, name } = props.food
    return (
        <div className='p-1' >
            <div class="card" style={{ width: " 9rem", }}>
                <img style={{ height: '7rem' }} className='card-img-top' src={photo} alt="Card image cap" />
                <div class="card-footer text-center cat-title">
                    <small><b>{name}</b></small>
                </div>
            </div>
        </div>
    );
};

export default FastFoodCard;