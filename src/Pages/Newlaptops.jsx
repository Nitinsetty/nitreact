import React from 'react';
import { laptopdata } from '../Data/Laptops';
import { Link } from 'react-router-dom';

function Newlaptops() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
      {laptopdata.map((item) => (
        <Link to={`/laptops/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ margin: '10px', textAlign: 'center' }}>
            <img src={item.img} alt={item.Brand} style={{ width: '150px', height: 'auto' }} />
            <p>Brand: {item.Brand}</p>
            <p>Price: {item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Newlaptops;
