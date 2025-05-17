import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA';
//step 1: create context
const UserContext = createContext();
//step 2: wrap all the child inside a provider
//step 3: pass value
//step 4: consumer ke ander jaake consume karlo
function App() {
  const [user, setUser] = useState({name:"Love"});
  return (
    <>
      <UserContext.Provider value = {user}>
        <ChildA />
      </UserContext.Provider>
    
    </>
  )
}

export default App
export {UserContext}
