import React from 'react';
import { useParams } from 'react-router-dom';
import { mobdata } from '../../Data/Mobile';

function Singlemobile() {
    const { id } = useParams();
    const mobile = mobdata.find((ele) => ele.id == (id));
    console.log(id)
    return (
        <div className="product-item" >
            <div>
            <img src={mobile.img} alt="" />
            </div>
              <div style={{display:'flex', flexWrap:'wrap'}}>
             <p>{mobile.Brand}</p> 
            <p >{mobile.price}</p>
        </div>
        </div>
    );
}

export default Singlemobile;
