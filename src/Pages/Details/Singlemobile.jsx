import React from 'react';
import { useParams } from 'react-router-dom';
import { mobdata } from '../../Data/Mobile';

function Singlemobile() {
    const { id } = useParams();
    const mobile = mobdata.find((ele) => ele.id === Number(id) || ele.id === id);

    // Check if the mobile object exists
    if (!mobile) {
        return <p>Mobile not found</p>;
    }

    return (
        <div className="product-item">
            <img src={mobile.img} alt={`${mobile.Brand}`} />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <p>{mobile.Brand}</p>
                <p>{mobile.price}</p>
            </div>
        </div>
    );
}

export default Singlemobile;
