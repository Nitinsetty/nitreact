import React from 'react'
import { CiMobile3 } from "react-icons/ci";
import { LiaLaptopSolid } from "react-icons/lia";
import { BsEarbuds } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Sidenavbar() {
  return (
    <div className='sidenav'>
      <ul>
        <Link  to="/mobile">
        <li>
        <CiMobile3 />   Mobiles
        </li>
        </Link>
        <Link  to="/laptops">
        <li>
        <LiaLaptopSolid />   Laptops
        </li></Link>
        <li>
        <BsEarbuds />   Earbuds
        </li>
        <li>
        <FaTv />    Tv
        </li>
        
        <li>
        <IoIosLogOut />   Logout
        </li>
      </ul>
    </div>
  )
}

export default Sidenavbar
