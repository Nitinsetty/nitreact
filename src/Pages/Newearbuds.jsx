import React from 'react';
import { earbudsdata } from '../Data/Earbuds'; 
import { Link } from 'react-router-dom';

function Mobile() {
    return (
        <div className="mobile-container">
            {earbudsdata.map((item) => (
                <Link to={`/earbuds/${item.id}`} key={item.id}>
                    <div className="product-item">
                        <div>
                            <img src={item.img} alt={item.title} className='product-image' />
                        </div>
                        <div className='product-info'>
                            <h2>{item.title}</h2>
                            <p>Brand: {item.Brand}</p>
                            <p>Price: ${item.price}</p> {/* Added dollar sign for clarity */}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Mobile;