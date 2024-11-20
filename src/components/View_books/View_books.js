import React from 'react'
import './View_books.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function View_books() {
  return (
    <div>
      <div className='py-5 viewbooks' id='books'>
        <h1 className='text-center pt-5'>View Books</h1>
        <div className='container w-75'> <hr /></div>

        <div className='d-flex flex-wrap justify-content-center gap-5 my-5'>

          <div style={{ overflowX: "hidden" }}>
            <Card className='text-center' data-aos="fade-right" style={{ width: '16rem', overflowX: "hidden"}}>
              <Card.Img style={{height:"300px"}} className='images1' variant="top" src="https://i.postimg.cc/5NBRqZmb/images.jpg" />
              <Card.Body>
                <Card.Title>THE WOMEN</Card.Title>
                <Card.Text>
                  Kristin Hannah
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Card className='text-center' data-aos="zoom-out" style={{ width: '16rem' ,overflowX: "hidden"}}>
            <Card.Img style={{height:"300px"}} className='images2' variant="top" src="https://i.postimg.cc/YqcdSDmQ/Kite-runner.jpg" />
            <Card.Body>
              <Card.Title>KITE RUNNER</Card.Title>
              <Card.Text>
                Khaled Hosseini
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='text-center' data-aos="zoom-out" style={{ width: '16rem' ,overflowX: "hidden"}}>
            <Card.Img style={{height:"300px"}} className='images3' variant="top" src="https://i.postimg.cc/NGV7kmWs/81l-Eiz-X7-Sz-L-UF1000-1000-QL80.jpg" />
            <Card.Body>
              <Card.Title>THE PREDATOR</Card.Title>
              <Card.Text>
                Runyx
              </Card.Text>
            </Card.Body>
          </Card>

          <div style={{ overflowX: "hidden" }}>
            <Card className='text-center' data-aos="fade-left" style={{ width: '16rem' ,overflowX: "hidden"}}>
              <Card.Img style={{height:"300px"}} className='images4' variant="top" src="https://i.postimg.cc/4dXMtQY4/313-RLst-C9-VL-SY445-SX342.jpg" />
              <Card.Body>
                <Card.Title>A STORY OF STRUGGLE</Card.Title>
                <Card.Text>
                  Ashok kumawat
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}

export default View_books
