import React from 'react'
import Container from 'react-bootstrap/Container'
import { Row,Col } from 'react-bootstrap'
import Sidenavbar from './Sidenavbar'
import Header from './Header'

function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}>
          <Sidenavbar/>
          </Col>
          <Col sm={10}>
          <Header/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
