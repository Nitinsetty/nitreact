import React from 'react';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Newmobile from './Pages/Newmobile';
import './App.css';
import Newlaptops from './Pages/Newlaptops';
import Singlemobile from './Pages/Details/Singlemobile';
import Singlelaptops from './Pages/Details/Singlelaptops';
import Newearbuds from './Pages/Newearbuds';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mobile" element={<Newmobile />} />
          <Route path="/mobile/:id" element={<Singlemobile />} />
          <Route path ="/laptops" element={<Newlaptops/>}/>
          <Route path ="/laptops:id" element={<Singlelaptops />} /> 
          <Route path ="/earbuds" element={<Newearbuds/>}/>
        
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App