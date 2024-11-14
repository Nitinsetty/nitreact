import React from 'react';
import { useParams } from 'react-router-dom';
import {laptopdata} from '../../Data/Laptops';

function Singlelaptops() {
    const { id } = useParams();
    const Laptops = laptopdata.find((ele) => ele.id ===Number(id));
    return (
        <div>
            <img src={Laptops.img} alt="" />
        </div>
    );
}

export default Singlelaptops;
