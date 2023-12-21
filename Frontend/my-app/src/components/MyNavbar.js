import {useState, React, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';


const MyNavbar = ({login,setLogin}) => {
  const navigate=useNavigate();
  // const userLogged=""
  
  // useEffect(()=>{
  //   const userLogged = localStorage.getItem("userLogged") ;
  //   console.log("userLoggednav->"+userLogged)
  //   setLogin(userLogged)
  // },[])
  //Hello Jaya
  console.log("login->"+login)
  const logoutHandler = ()=>{
    // const userLogged = localStorage.getItem("userLogged") === "true";
    localStorage.setItem("userLogged","false")
    setLogin(false)
    navigate("/")
  }
  return (
    <div className='mynav'>
      <Navbar expand="lg" className="bg-body-tertiary bg-dark-subtle">
      <Container fluid >
        <Navbar.Brand href="/" className='fs-2'>Let'sConnectMore</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          />
          {console.log("loginIn->"+login)}
          {console.log(typeof(login))}
          {(login==="true")?(
           
            <div>
            <Navbar.Brand href="/dashboard" className='font-weight-medium'>Go to dashboard </Navbar.Brand>

            <button className="btn text-white bg-slate-500 btn-lg" onClick={logoutHandler}>
            LOGOUT 
           </button>
           </div>
          )
          :
          (<button className="btn text-white bg-slate-500 btn-lg hover:bg-slate-700"  onClick = {()=>navigate("/login")}
            >
            LOGIN 
           </button>
            
          )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar;







