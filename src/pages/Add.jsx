import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
const [book, setBook]=useState({
    title:'',
    desc:'',
    price:'',
    cover:''
})

const navigate=useNavigate()

const handleChange =(e)=>{
    setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
}

const handleClick=async (e)=>{
  e.preventDefault();
  try {
    await axios.post("http://localhost:8800/books",book)
    navigate("/")
  } catch (error) {
    
  }
}

console.log(book)
  return (
   <div className="form">
    <h1>Add New Book</h1>
    <input type="text" name="title" id="" onChange={handleChange} placeholder='title' />
    <input type="text" name="desc" id="" onChange={handleChange} placeholder='description'/>
    <input type="text" name="price" id="" onChange={handleChange} placeholder='price'/>
    <input type="text" name="cover" id="" onChange={handleChange} placeholder='cover'/>
  <button onClick={handleClick}>Add</button>
   </div>
  )
}

export default Add