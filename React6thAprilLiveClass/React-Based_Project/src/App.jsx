import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(810)

  const initialState = {
    count: 0
  }
  const reducerFun = (state, action) => {
    if(action.type ==='INC'){
      return {
        ...state,
        count: state.count+1

      }

     
    }
    else if(action.type==='DEC'){
      return {
        ...state,
        count: state.count-1
      }


    }

    return state
  }
  const [state, dispatch]= useReducer(reducerFun, initialState)
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch({type: 'INC'})}>
          INC
          count is {count}
        </button>
        <p>
         count is {state.count},
        </p>

        <button onClick={() => dispatch({type: 'DEC'})}>
         DEC
          count is {count}
        </button>


      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
