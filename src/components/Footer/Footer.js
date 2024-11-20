import React from 'react'
import './Footer.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {

  const clickHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div className='footer p-3'>
      <div className=''>
        <Row>
          <div className='d-flex flex-wrap justify-content-center'>
            
              <Col lg={3} className='px-5'>
                <Link style={{textDecoration:"none", color:"black"}} onClick={clickHandler} to={'/home'}>
                  <div className='d-flex align-items-center gap-2'>
                    <img className='logo' src="https://i.postimg.cc/3x7HH15t/240-F-768821392-r-RNUQAZfnu-FFi2-CD4-KJdo-VQpj44-Aeo-Ea-removebg-preview.png" alt="" />
                   <div> <h2 className='m-0 mt-3 '><span style={{color:"rgb(17, 91, 17)"}}>E</span>-library</h2></div>
                  </div>
                </Link>
              </Col>
              <Col lg={3} className=' px-5'>
              <h2 className='mt-3'>guides</h2>
              <p className='mb-0'>react</p>
              <p className='mb-0'>react bootstrap</p>
              <p className='mb-0'>routing</p>
              </Col>
              <Col lg={3} className=' px-5'>
              <h2 className='mt-3'>Links</h2>
              <p className='mb-0'>Landing page</p>
              <p className='mb-0'>Home</p>
              <p className='mb-0'>View book</p>
              <p className='mb-0'>Library</p>
              <p className='mb-0'>About Us</p>
              </Col>
              <Col lg={3} className='px-3' style={{overflowx: "hidden"}}>
              <h2 className='mt-3'>Contact Us</h2>
              <label className='border d-flex align-items-center gap-2 me-5' htmlFor="">
                <input className='border-0 w-100' type="text" name="" id="" />
                <i class="fa-solid fa-envelope fs-2 "></i>
              </label>
              </Col>
          </div>
          
        </Row>
      </div>
    </div>
  )
}

export default Footer
