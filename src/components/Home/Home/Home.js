import React from 'react';
import Slider from '../Slider/Slider';
import Nav from '../../shared/Nav/Nav'
import FastFood from '../FastFood/FastFood';
import CardTable from '../CardTable/CardTable';
import Shop from '../Shop/Shop';
import Footer from '../../shared/Footer/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Slider></Slider>
            <FastFood></FastFood>
            <CardTable></CardTable>
            <Shop></Shop>
            <Footer></Footer>
        </div>
    );
};

export default Home;