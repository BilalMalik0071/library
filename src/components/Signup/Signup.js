import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { addSignup } from '../../Servicefile/allApis'

function Signup() {

  const navigate = useNavigate();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const inputHandler = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const clickHandler = async (event) => {
    event.preventDefault()
    const { firstName, lastName, email, password } = input
    if (firstName === "" || lastName === "" || email === "" || password === "") {
      alert("please fill the input")
    } else {
      const result = await addSignup(input)
      console.log(result.data);
      if (result.status >= 200 && result.status < 300) {
        alert('register successfully')
        const { firstName, lastName, email, password } = input
        const emtyData={
          firstName:"",
          lastName:"",
          email:"",
          password:""
        }
        setInput(emtyData)
        navigate('/signin')
      }
    }
  }

  return (
    <div className='signUpbackgrond'>
      <div className='w-75 container pt-5'>
        <Row className='mt-5'>
          <Col lg={6}>

          </Col>
          <Col lg={6}>

            <form onSubmit={clickHandler} action="" className='signUpBox border border-3 rounded-3 p-3'>
              <h1 className='text-center mb-4'>Sign Up</h1>
              <input onChange={(e) => inputHandler(e)} value={input.firstName} name='firstName' type="text" placeholder='First name' className='form-control mb-3' />
              <input onChange={(e) => inputHandler(e)} value={input.lastName} name='lastName' type="text" placeholder='Last name' className='form-control mb-3' />
              <input onChange={(e) => inputHandler(e)} value={input.email} name='email' type="email" placeholder='Email ID' className='form-control mb-3' />
              <input onChange={(e) => inputHandler(e)} value={input.password} name='password' type="password" placeholder='Password' className='form-control mb-3' />

              <div className='d-flex justify-content-end'>
                <div className='d-flex justify-content-between flex-wrap' style={{ width: "300px" }}>
                  <button type='submit' id='submit'>Sign Up</button>
                  <div>have an account <Link to={'/signin'}>SignIn</Link></div>
                </div>
              </div>

            </form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Signup
