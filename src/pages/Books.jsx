import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom';
const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books')
        setBooks(res.data)
        console.log(res)
      } catch (error) {

      }
    }
    fetchAllBooks();

  }, [])

  const handleDelete = async (id) => {
    debugger
    try {
      await axios.delete("http://localhost:8800/book/"+id)
      window.location.reload();
    } catch (error) {

    }
  }


  return (
    <div>
      <h1>Lama Book Shop</h1>
      <div className="books">
        {books.map(book => (
          <><div key={book.id} className="book">
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <h2>{book.desc}</h2>
            <span>{book.price}</span>
            <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>
            <button className='delete' onClick={()=>handleDelete(book.id)}>delete</button>
          </div>

          </>
        ))}
      </div>
      <button>  <Link to="/add">Add new Book</Link></button>
    </div>
  )
}

export default Books