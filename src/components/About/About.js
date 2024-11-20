import React from 'react'
import './About.css'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <div className='about py-5' id='about'>
      <div style={{ overflowX: "hidden" }} className='container w-75 py-5'>
        <Row >
          <Col lg={6}>
            <div data-aos="fade-up"data-aos-duration="2000" className='text-center'>
              <h1>About</h1>
              <p>At E-library, we believe in the power of knowledge and the importance of a community space where everyone can learn, grow, and explore. Since our founding in 2024, we’ve been committed to offering a wide variety of resources, programs, and services that inspire learning and foster a love of reading for all ages</p>
            </div>
          </Col>
          <Col lg={6}>
            <div data-aos="zoom-in" className='text-center my-2'>
              <img className='rounded-1 w-100' style={{boxShadow:"1px 1px 5px 10px rgba(0,0,0,0.9)"}} src="https://i.postimg.cc/0NLR33yV/20170509-Eng-Library-DJA-012-3.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default About
