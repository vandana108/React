
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const[count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);

  }
  return (
   <div>
    <Button incrementCount = {handleClick} text ="click me"/>
   <Card name="love babbar">
    <h1>Best web development course</h1>
    <p>Trying to be consistent in this course</p>
    <p>well, see when I win hackathon</p>
   </Card>
   <Card>
    <h1>Hello Team, Hope yor're doing great!!</h1>
   </Card>
   </div>
  )
}

export default App
