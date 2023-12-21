import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
    const [formData,setFormData]= useState({email:"",name:"",password:""})
    const onChangeHandler=(e)=>{
         const {name,value} = e.target;
         setFormData((prevdata)=>({
           ...prevdata,
           [name]:value
         }))
    }
    const Navigate=useNavigate();
    const submitHandler=async(e)=>{
      e.preventDefault();
      try{
        console.log("jaya");
        console.log(formData);
         const response = axios.post("http://localhost:4000/api/v1/auth/signup",formData);
         console.log("frontendResp"+response);
         Navigate("/login");
      }
      catch(error){
        alert(error.response.data.message);
        // console.log(error.response.data.message);
        console.log(error)
      }

    }

  return (
    <div className='flex justify-center items-center bg-slate-400 h-full '>
    
     <form 
      className='flex flex-col justify-center items-center w-[22rem] h-[27rem] rounded-md bg-slate-700 border-4 border-indigo-900 '
      onSubmit={submitHandler}
     >

     
      <label   className='flex flex-col justify-center items-center ' >
       <p className='text-white text-lg'> Your Email</p>
    <input className='w-[20rem] h-[2rem]  mt-[1rem] mb-[2rem] flex justify-center items-center   text-center rounded-md bg-slate-100 '
    type='text'
    placeholder='enter your email here'
    onChange={onChangeHandler}
    name='email'
    required
    value={formData.email}
    />
  </label>

  <label   className='flex flex-col justify-center items-center ' >
       <p className='text-white text-lg'> Your Name</p>
    <input className='w-[20rem] h-[2rem]  mt-[1rem] mb-[2rem] flex justify-center items-center   text-center rounded-md bg-slate-100 '
    type='text'
    placeholder='enter your name here'
    onChange={onChangeHandler}
    value={formData.name}
    required
    name='name'
    />
  </label>
  
    <label  className='flex flex-col justify-center items-center '>
    <p className='text-white text-lg'> Your password</p>
    <input
    type='password'
    placeholder='enter your password here'
    required
    value={formData.password}
    onChange={onChangeHandler}
    name='password'
    className='w-[20rem] h-[2rem]  mt-[1rem] mb-[2rem]  flex justify-center items-center bg-slate-100 text-center rounded-md'
    />
     </label>
    <div>
     <button className='flex justify-center items-center text-lg w-[20rem] h-[2rem]  mt-[1rem] mb-[2rem] text-white rounded-md bg-slate-400' type='submit'>
        Signup
     </button>
     
     </div>
      </form>
  
    </div>
  )
}

export default Signup
