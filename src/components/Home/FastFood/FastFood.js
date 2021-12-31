import React from 'react';
import './FastFood.css'
import img1 from '../FastFood/img/category1.png'
import img2 from '../FastFood/img/category2.png'
import img3 from '../FastFood/img/category3.png'
import img4 from '../FastFood/img/category4.png'
import img5 from '../FastFood/img/category5.png'
import img6 from '../FastFood/img/category6.png'
import img7 from '../FastFood/img/category7.png'
import img8 from '../FastFood/img/category8.png'
import FastFoodCard from '../FastFoodCard/FastFoodCard';

const Food = [
    {
        photo: img1,
        name:'Pizza'
    },
    {
        photo: img2,
        name:'Burger'
    },
    {
        photo: img3,
        name:'Sauces'  
    },
    {
        photo: img7,
        name:'Chicken'
    },
    {
        photo: img5,
        name:'Kids menus'
    },
    {
        photo: img6,
        name:'Box meals'
    },
    {
        photo: img4,
        name:'Combo'
    },
    {
        photo: img8,
        name:'Tea'
    },
]

const FastFood = () => {
    return (
        <div style={{ margin: "50px" }}>
            <div className="row">
                <div className= "d-flex h-100">
                {
                Food.map(food => <FastFoodCard food={food} ></FastFoodCard>)
            }
                </div>
            </div>
        </div>
    );
};

export default FastFood;