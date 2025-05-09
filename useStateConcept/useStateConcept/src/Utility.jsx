import React from 'react'
import { useState } from 'react'
import App from './App'
import './App.css';
function Utility(){
  const{counts, setCount} = useState(9)
  return(
    <>
    <div className>
        <div>I'm Page first</div>
    </div>
    
    </>
  )

}

export default Utility