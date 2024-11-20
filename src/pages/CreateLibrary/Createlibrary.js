import React from 'react'
import './Createlibrary.css'
import Library_collections from '../../components/Librarycollection/Library_collections'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Createlibrary() {

  const clickHandler = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='pt-5'>
      <div id='herosection'>
        <h1 className='pt-5 text-center' id='herocontent'>Welcome To Our Library</h1>
        <div className='text-center'>
          <Link onClick={clickHandler} to={'/addbook'}><button id='herocontent' className='Addbtn py-1 px-3 fs-5 rounded-5 my-4'>Add Books</button></Link>
        </div>
        <NavLink href='#bookCollections'>
          <div id='herocontent'>
            <i class="fa-solid fa-angles-down fa-beat"></i>
          </div>
        </NavLink>
      </div>

      <Library_collections />
    </div>
  )
}

export default Createlibrary
