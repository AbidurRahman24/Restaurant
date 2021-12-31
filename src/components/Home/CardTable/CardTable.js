import React from 'react';
import './CardTable.css'
import CardTableDetals from '../CardTableDetails/CardTableDetals';
import img1 from './img/h1_banner1-1.png'
import img2 from './img/h1_banner2-2.png'
import img3 from './img/h1_banner3.png'
import img11 from './img/h1_banner1-2.png'
import img22 from './img/h1_banner2-1.png'

const CardTableData = [
    {
        title:'Any day offers',
        description:'NEW PHENOMENON  BURGER TASTE',
        price:'$ 12.90',
        image: img1,
        bg: img11,
    },
    {
        title:'Other flavors',
        description:'SAVE ROOM. WE MADE SALATS',
        price:'$ 12.90' ,
        image: img2,
        bg: img22
    },
    {
        title:'Find a Poco store near you',
        description:'Contact us',
        image: img3,
        bg: img22,
    },
]

const CardTable = () => {
    return (
        <div style={{backgroundColor:'#f7f2e2'}}>
                <div className="row " style={{margin:'50px'}}>
                    <div className=" d-flex pb-5 pt-5 ">
                        {
                            CardTableData.map(data => <CardTableDetals data={data} ></CardTableDetals>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default CardTable;