import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Layout />
      </Router>

    </div>
  )
}

export default App
