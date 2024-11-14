import React from 'react';
import { mobdata } from '../Data/Mobile';
import { Link } from 'react-router-dom';

function Mobile() {
    return (
        <div className="mobile-container">
            {mobdata.map((item) => (
                <Link to={`/mobile/${item.id}`} style={{textDecoration:"none", color:"black"}}>
                <div className="product-item"> 
                    <div>
                        <img src={item.img} alt={item.Brand} className='attach' />
                    </div>
                    <div className='cut'>
                        <h2>{item.title}</h2>
                        <p>Brand: {item.Brand}</p>
                        <p>Price: {item.price}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
}

export default Mobile;
