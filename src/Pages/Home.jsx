import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenavbar  from '../Pages/Sidenavbar';
import Header from './Header';

function Home() {
  return (
    <div>
       <Row>
        <Col sm={2}>
        <Sidenavbar/>
        </Col>
        <Col sm={10}>
        <Header/>
                
        </Col>
        </Row>
    </div>
  )
}

export default Home
