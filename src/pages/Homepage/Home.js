import React, { useEffect } from 'react'
import { Col, NavLink, Row } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../../components/About/About';
import View_books from '../../components/View_books/View_books';
import Library from '../../components/Library/Library';
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className='background p-5' id='Home'>
        <Link to={'/'}>
          <h1 className='backLandArrow'><i class="fa-sharp-duotone fa-solid fa-angles-left fa-fade "></i></h1>
        </Link>
        <h1 className='my-4 text-center text-light' data-aos="zoom-out">Welcome to Your E-Library</h1>
        <div className='container mb-5'>
          <Row>
            <Col lg={6} className='text-light'>
              <div className='pb-5'>
                <div className='mb-4 fa-3x heroContent'> Your gateway to an endless world of knowledge.</div>
                <NavLink className='d-inline-block mb-5' href='#library'>
                  <button className='getbtn' data-aos="fade-right">Get Start</button>
                </NavLink>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <View_books />
      <Library />
      <About />
    </div>
  )
}

export default Home
