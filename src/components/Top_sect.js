import React from 'react';

import Title from './Title_btns';
import img1 from '../img/medellin1.png';
import img2 from '../img/medellin2.png';
import img3 from '../img/medellin3.png';
import './css/Top_sect.css';

const Top_sect=()=>{
    return( 
        <div id='top'>     
            <div className="carousel" data-ride="carousel" data-pause="false">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="Medellin 1"/>
                    </div>
                    <div className="carousel-item active">
                        <img src={img2} className="d-block w-100" alt="Medellin 2"/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="Medellin 3"/>
                    </div>
                    <div className="overlay">
                        <Title/>
                    </div>
                </div>
            </div> 
        </div>     
    );
}
export default Top_sect;