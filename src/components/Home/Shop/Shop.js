import React, { useEffect, useState } from 'react';
import FoodDetails from '../FoodDetails/FoodDetails';

const Shop = () => {
    const [fastFood, setfastFood] = useState([])
    useEffect(() => {
        fetch('')
            .then(response => response.json())
            .then(data => {
                console.log(data.meals);
                setfastFood(data)
            });
    }, [])
    return (
        <div>
            {
                    fastFood.map(fd => <FoodDetails key={Math.random()}  fd={fd} ></FoodDetails>)
                }
                <h2>Hello Code</h2>
        </div>
    );
};

export default Shop;