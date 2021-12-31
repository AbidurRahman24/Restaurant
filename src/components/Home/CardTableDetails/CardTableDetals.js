import React from 'react';
import './CardTableDetails.css'

const CardTableDetals = (props) => {
    const {title,description,price,image,bg} = props.data
    return (
        <div class='col-md-4 m-2 '>
            <div class="card mb-3" style={{ maxWidth: "540px;",  }}>
                <div class="row g-0 card-table" style={{maxHeight: "240px;"}}>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h2 class="card-title">{title}</h2>
                            <p class="card-text">{description}</p>
                            <p class="card-text"><span class=""style={{color:'#00a850'}} > {price}</span></p>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex align-items-center">
                        <img src={image} class="img-fluid rounded-start img-background" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardTableDetals;