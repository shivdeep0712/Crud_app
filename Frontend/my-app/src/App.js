import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Edit from './components/Edit';
import Login from './components/Login';
import Signup from './components/Signup';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Detail from './components/Detail';

function App() {
  const [login,setLogin]=useState(localStorage.getItem("userLogged"));
  console.log("app")
  console.log("login->"+login)
  console.log(typeof(login))
    
  console.log("Applogin->"+login)
  return (
    <div className="App myApp">
      <MyNavbar  login={login} setLogin={setLogin} />
    
      <Routes>
        {/* my routes */}
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login login={login} setLogin={setLogin}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
