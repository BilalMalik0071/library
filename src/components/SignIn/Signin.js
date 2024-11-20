import React, { useState } from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { getSignup } from '../../Servicefile/allApis'


function Signin() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const clickHandler = async (event) => {
    event.preventDefault()
    const { email, password } = input
    if (email === "" || password === "") {
      alert("please fill the input")
    } else {
      const { data } = await getSignup()
      console.log(data);
      

      if (data.find((i) => ((i.email === input.email) && (i.password === input.password)))) {
        alert('signIn authentication')

        const { email, password } = input
        const emtyData = {
          email: "",
          password: ""
        }
        setInput(emtyData)

        navigate('/home');

      } else if (data.find((i) => (i.email === input.email) && (i.password != input.password))) {
       alert("incorrect password!") 

      } else if (data.find((i) => ((i.email != input.email) && (i.password === input.password)))) {
        alert("Invalid email!") 

      } else if (data.find((i) => (i.email != input.email) && (i.password != input.password))) {
        alert("Don't have an account? Sign up")

        const { email, password } = input
        const emtyData = {
          email: "",
          password: ""
        }
        setInput(emtyData)
        
        navigate('/signup');

      }

    }

  }
  return (
    <div className='signinbackgrond pt-5'>
      <div className='container w-75 pt-5'>
        <Row>
          <Col lg={6}>

          </Col>
          <Col lg={6}>

            <form onSubmit={clickHandler} className='signinBox border border-3 rounded-3 p-4'>

              <h1 className='text-center mb-4'>Sign In</h1>
              <input onChange={(e) => inputHandler(e)} value={input.email} name='email' type="email" className='form-control mb-3' placeholder='Email ID' />
              
              <input onChange={(e) => inputHandler(e)} value={input.password} name='password' type="password" className='form-control mb-3' placeholder='Password' />
              

              <div className='d-flex justify-content-between flex-wrap'>
                <button type='submit' id='submit'>Sign In</button>
                <div>Don't have an account <Link to={'/signup'}>SignUp</Link></div>
              </div>

            </form>

          </Col>
        </Row>


      </div>
    </div>
  )
}

export default Signin
