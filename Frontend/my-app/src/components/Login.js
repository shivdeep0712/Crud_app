import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Login = ({login,setLogin}) => {
  const [formData,setFormData]=useState({email:"",password:""});

  const navigate = useNavigate()
  const onChangeHandler=(e)=>{
        const {name,value}= e.target;
        setFormData((prevdata)=>({
          ...prevdata,
          [name]:value
        }))
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    try{
      console.log("jaya reached")
      console.log(formData)
      const response = await axios.post('http://localhost:4000/api/v1/auth/login',formData);
      console.log("response->"+JSON.stringify(response))
      console.log(response);
      localStorage.setItem("userLogged","true")
      setLogin("true")
      navigate('/dashboard')
    }
    catch(error){
       console.log(error);
      //  console.log('error.response.data.message');
       alert(error);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center bg-slate-400 h-full '>
    
     <form 
      className='flex flex-col justify-center shadow-lg shadow-cyan-500/50 items-center mb-[1rem] w-[22rem] h-[20rem] rounded-md bg-slate-700 border-4 border-indigo-900 '
      onSubmit={submitHandler}
     >
     
      <label   className='flex flex-col justify-center items-center ' >
       <p className='text-white text-lg'> Your Email</p>
    <input className='w-[20rem] h-[2rem]  mt-[1rem] mb-[2rem] flex justify-center items-center   text-center rounded-md bg-slate-100 '
    type='text'
    onChange={onChangeHandler}
    placeholder='enter your email here'
    name='email'
    value={formData.email}
    required
    />
  </label>
  
    <label  className='flex flex-col justify-center items-center '>
    <p className='text-white text-lg'> Your password</p>
    <input
    onChange={onChangeHandler}
    required
    type='password'
    name='password'
    value={formData.password}
    placeholder='enter your password here'
    className='w-[20rem] h-[2rem]  mt-[1rem] mb-[2rem]  flex justify-center items-center bg-slate-100 text-center rounded-md'
    />
     </label>
    <div>
     <button className='flex justify-center items-center text-lg w-[20rem] h-[2rem]  mt-[1rem] mb-[2rem] text-white rounded-md bg-slate-400'
     type='submit'>
        Login
     </button>
     
     </div>
      </form>
      <div className='text-lg font-bold'>
        not registered yet? <Link to='/signup' className='underline text-white font-thin decoration-gray-700'>Signup here</Link>
      </div>
  
    </div>
  )
}

export default Login
