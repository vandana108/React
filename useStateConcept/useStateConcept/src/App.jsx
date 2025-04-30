import { useState } from 'react'
import Utility from './Utility'
import {useValue} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(5)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>



        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Developer's World</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          here is some count is {count} I don't know whether it's correct or not!
        </button>

        <br /> <br />
       
       <button onClick={() => setValue((value) => value + 1)}> 
        this is for{value} count
       </button>

        <br /><br />

        <button onClick={() => setCount((count) => count-1)}>
        it's for decreasing the count {count} for subtracting the value
        </button>


        <p>
          Don't dare <code>to edit the </code> Code bro,
        </p>
      </div>
      <p className="read-the-docs">
        this is what only developer can get it man, so just chill!!
      </p>
    </>
  )
}

export default App
