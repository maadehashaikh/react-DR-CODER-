import React from 'react';
import Counter from './components/Counter';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './components/User';
import { Routes , Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './components/Features';
import Pricing from './components/Pricing'; 

function App() {
  return (
    <>
    {/* <Counter/>
    <ToastContainer/> */}
    {/* <User/>  marital ststus checking  */}
    <NavBar/>
    <Routes>
      <Route path='/' element={<Counter/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/User' element={<User/>}/>
    </Routes>
    </>
  );
}
export default App;


// react-router-dom is liyay hm use karty hain so that hm nav bar say dosry pages p ja sakain 
