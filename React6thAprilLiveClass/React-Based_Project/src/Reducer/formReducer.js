
import { useReducer } from 'react'
import './APP1.css'

const App-()=>{

const initialState = {
  firstName : '',
  lastName : '',
  emailId: ''
}


const formReducer = (state, action) => {
  if(action.type === 'FIRST_NAME'){
    return{
      ...state,
      firstName: action.payload
    }
  }
  else if(action.type === 'LAST_NAME'){
    return{
      ...state,
      firstName: action.payload
    }
  }
  else if(action.type === 'emailId'){
    return{
      ...state,
      firstName: action.payload
    }
  }
  return state
}

  const[formState, formDispatch] = useReducer(formReducer, initialState)
  return (
    <input placeholder='Enter first Name' onChange={(event)=>formDispatch({type: 'FIRST_NAME', payload: event.target.value})}/>
  )
}

export default APP1