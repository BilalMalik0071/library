import React from 'react'
import './Library.css'
import { Book, BookOpen, Trash } from 'react-feather';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Library() {

  const clickHandler=()=>{
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <div className='py-5 library' id='library'>
        <h1 className='text-center pt-5'>Your Library</h1>
        <div className='container w-25'><hr /></div>

        <div className='container w-75'>
          <Row className='my-5'>
            <Col lg={5} >
              <div className='mb-4' data-aos="zoom-in-up">
                <img className='w-100   rounded-4' style={{boxShadow:"1px 1px 5px 3px rgba(0,0,0,0.9)"}} src="https://i.postimg.cc/ht35Pmzk/library-with-bookshelf-398492-5616.jpg" alt="" />
              </div>
            </Col>
            <Col lg={7}>
              <div>
                <h2 className='mb-2' data-aos="fade-up">The World of Knowledge, Just a Click Away</h2>
                <p className='mb-3' data-aos="fade-up">Step into the future of reading! Your ideal library awaits at the click of a button.</p>

                <div data-aos="fade-up" className='d-flex align-items-center gap-3 mb-3'>
                  <div className='Book p-1 border border-3 rounded-2 d-flex align-items-center'>
                    <Book size={15} />
                  </div>
                  <p className='m-0'>Create your collection</p>
                </div>

                <div data-aos="fade-up" className='d-flex align-items-center gap-3 mb-3'>
                  <div className='BookOpen p-1 border border-3 rounded-2 d-flex align-items-center'>
                    <BookOpen size={15} />
                  </div>
                  <p className='m-0'>Explore your personal library.</p>
                </div>

                <div data-aos="fade-up" className='d-flex align-items-center gap-3 mb-3'>
                  <div className='trash p-1 border border-3 rounded-2 d-flex align-items-center'>
                    <Trash size={15} />
                  </div>
                  <p className='m-0'>Remove books you don't need.</p>
                </div>
                <Link onClick={clickHandler} to={'/createlibrary'}><button data-aos="zoom-in-up" className='Explr_btn mt-3'>Explore The World</button></Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Library
