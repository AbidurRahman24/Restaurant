import React from 'react';
import Slider from '../Slider/Slider';
import Nav from '../../shared/Nav/Nav'
import FastFood from '../FastFood/FastFood';
import CardTable from '../CardTable/CardTable';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Slider></Slider>
            <FastFood></FastFood>
            <CardTable></CardTable>
            <Shop></Shop>
        </div>
    );
};

export default Home;