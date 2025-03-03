import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from "./component/UserCard"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className='container'>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </div>
    </div>
    
  )
}

export default App
