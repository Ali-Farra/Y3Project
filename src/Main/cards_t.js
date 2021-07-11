
import React from 'react';
import './cards_t.css';
import img1 from '../Assist/hanan.jpg'
import img2 from '../Assist/ali.jpg'
import img3 from '../Assist/tasneem.jpg'

const Cards= (props) => (

<>
<div className="SeOfCards">
<h1>{props.p}</h1>
    <div className="c">
    
        <div className="box_c">
            <div className="imgbc">
                <img src={img1} alt="hanan">
                </img>
            </div>
            <div className="c_content">
                <h2>{props.n1}<br></br><span>designer</span> </h2>
            </div>
        </div>
        <div className="box_c">
            <div className="imgbc">
                <img src={img2} alt="Ali" >
                </img>
            </div>
            <div className="c_content">
                <h2>{props.n2}<br></br><span>designer</span> </h2>
            </div>
        </div>
        <div className="box_c">
            <div className="imgbc">
                <img src={img3} alt="nemo" >
                </img>
            </div>
            <div className="c_content">
                <h2>{props.n3}<br></br><span>designer</span> </h2>
            </div>
        </div>
    </div></div>
</>

)
export default Cards;