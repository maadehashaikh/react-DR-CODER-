import React, { useState } from 'react'
import './Counter.css'
import {toast} from "react-toastify";

const Counter = () => {
  const [counter,setcounter] = useState(0);
  const inc = () => {
    if(counter<20){
      setcounter(counter+1);
    }
    else{
      toast.warning(`You can't add more than ${counter+1} counts`);
    }
  }
  const dec = () => {
    if(counter>0){
      setcounter(counter-1);
    }
    else{
      toast.warning(`You can't go with negative counts`);
    }
  }
  return (
    <div className='mainDiv'>
    <h1 className='Counter'>Counter : {counter}</h1>
    <button onClick={inc} className='add'>Add</button>
    <button onClick={dec} className='sub'>Sub</button>
    </div>
  )
}
export default Counter
