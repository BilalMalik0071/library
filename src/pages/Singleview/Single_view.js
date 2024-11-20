import React, { useEffect, useState } from 'react'
import './Single_view.css'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getSingleBook } from '../../Servicefile/allApis'


function Single_view() {
  const clickHandler = () => {
    window.scrollTo(0, 0)
  }

  const [singleData, setSingleData] = useState({})

  const { id } = useParams()

  const accessSingleData = async () => {
    const result = await getSingleBook(id)
    console.log(result.data);

    if (result.status >= 200 && result.status < 300) {
      setSingleData(result.data)
    }
  }
  console.log(singleData);

  useEffect(() => {
    accessSingleData()
  }, [])

  return (
    <div id='singlebg'
      style={{
        backgroundImage: `url(${singleData.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='container p-5'>

        <div className='mb-4'>
          <Link onClick={clickHandler} to={'/createlibrary'}>
            <button className='backbtn'>
              <i class="fa-solid fa-backward fa-beat-fade"></i> Back to library
            </button>
          </Link>
        </div>

        <div className='bg-white'>
          <Row  >
            <Col lg={6}>
              <div className='p-5'>
                <img style={{ height: "70vh" }} className='w-100' src={singleData.coverImage} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className='p-5' >
                <h1 className='title mb-3'>{singleData.title}</h1>
                <h4 className='Auther mb-'>Auther : {singleData.autherName}</h4>
                <h4 className='Published mb-'>Published In : {singleData.published}</h4>
                <h4>Preface : <span className='prefacecontentlines mt-2'>{singleData.preface}</span></h4>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  )
}

export default Single_view
