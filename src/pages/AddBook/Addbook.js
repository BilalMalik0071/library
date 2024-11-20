import React, { useEffect, useState } from 'react'
import './Addbook.css'
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addBook, getUpdateBook, postUpdatedBook } from '../../Servicefile/allApis';

function Addbook() {

  const { id } = useParams()

  const navigate = useNavigate();

  const clickHandler = () => {
    window.scrollTo(0, 0)
  }

  const [input, setInput] = useState({
    title: "",
    coverImage: "",
    autherName: "",
    published: "",
    preface: ""
  })


  const inputHandler = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }


  const editBook = async () => {
    const result = await getUpdateBook(id)
    console.log(result);

    if (result.status >= 200 && result.status < 300) {
      setInput(result.data)
    }
  }


  const submitHandler = async (event) => {

    window.scrollTo(0, 0)
    event.preventDefault()

    const { title, coverImage, autherName, published, preface } = input

    if (title === "" || coverImage === "" || autherName === "" || published === "" || preface === "") {
      alert("please fill the input")

    } else if (input.id) {

      const result = await postUpdatedBook(input, input.id)
      console.log(result);
      alert('book edited')
      navigate('/createlibrary')

    } else {
      const result = await addBook(input)
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        alert('book added')
        navigate('/createlibrary')
      }
    }
  }


  useEffect(() => {
    editBook()
  }, [])


  return (
    <div>

      <div id='addPage' className='pt-5'>

        <div className='container w-75 pt-4'>
          <div className=' text-end mb-4'><Link onClick={clickHandler} to={'/createlibrary'}><button id='backtolibrary'>Back to library</button></Link></div>
          <Row>
            <Col lg={6}>

            </Col>
            <Col lg={6}>
              <Form onSubmit={submitHandler} id='inputbox' className='p-3 border rounded-4'>

                <Form.Control onChange={(e) => inputHandler(e)} value={input.title} name='title' type="text" placeholder="Title :" className='mb-3' />
                <Form.Control onChange={(e) => inputHandler(e)} value={input.coverImage} name='coverImage' type="text" placeholder="Cover Image Url :" className='mb-3' />
                <Form.Control onChange={(e) => inputHandler(e)} value={input.autherName} name='autherName' type="text" placeholder="Auther Name :" className='mb-3' />
                <Form.Control onChange={(e) => inputHandler(e)} value={input.published} name='published' type="text" placeholder="Published In :" className='mb-3' />
                <Form.Control onChange={(e) => inputHandler(e)} value={input.preface} name='preface' as="textarea" placeholder="Preface :" rows={3} className='mb-3' />

                <div className='d-flex justify-content-between'>
                  <Button id='close'>Close</Button>
                  <Button id='submit' type="submit">Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>

        </div>

      </div>

    </div>
  )
}

export default Addbook
