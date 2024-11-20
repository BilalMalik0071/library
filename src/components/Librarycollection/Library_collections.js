import React, { useEffect, useState } from 'react'
import './Library_collection.css'
import { Link } from 'react-router-dom'
import { Edit, Trash2 } from 'react-feather'
import { deleteData, getBooks } from '../../Servicefile/allApis'

function Library_collections() {

  const clickHandler = () => {
    window.scrollTo(0, 0);
  }
  const [books, setbooks] = useState([])

  const accessBook = async () => {
    const { data } = await getBooks()
    setbooks(data)
  }

  const deleteHandler = async (id) => {
    const result = await deleteData(id)
    if (result.status >= 200 && result.status < 300) {
      alert('book is deleted')
      accessBook()
    } else {
      alert('book is not deleted')
    }
  }


  useEffect(() => {
    accessBook()
  }, [])
  return (
    <div id='bookCollections' className='py-5'>
      <h1 className='text-center text-white  py-5'>Explore Our E-Book Collection</h1>

      <div className='d-flex flex-wrap justify-content-center gap-5'>

        {
          books.length > 0 ?
            <>
              {
                books.map((book) => (
                  <div className='majorCard' key={book.id}>
                    <div id='card'>
                      <Link to={`/addbook/${book.id}`} id='edit'>
                        <Edit />
                      </Link>
                      <button id='trash' onClick={() => deleteHandler(book.id)}><Trash2 /></button>
                      <h3 className='title text-center pt-4'>{book.title}</h3>
                      <h6 className='autherName text-center'>{book.autherName}</h6>
                      <Link to={`/bookdetails/${book.id}`} onClick={clickHandler}>
                        <div id='subcard'>
                          <img className='imagesInCard w-100 rounded-4' style={{ height: "100%" }} src={book.coverImage} alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </>
            :
            <h1>Books not added</h1>
        }

      </div>

    </div>
  )
}

export default Library_collections
