
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

// function App() {
  

//   return (
//     <div>
//       <Card name ="Love Babbar" />
//     </div>
//   )
// }

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadenge
  const  [name, setName] = useState('');
  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>I am inside parent component and value of name is{name} </p>
    </div>
  )
}

export default App
