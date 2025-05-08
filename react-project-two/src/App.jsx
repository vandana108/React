import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from "./component/UserCard"
import vandana from "./assets/vandana.jpg"
import gautam from "./assets/gautam.jpg"
import sunita from "./assets/sunita.jpg"
function App() {


  return (
    /*we can user here only one div*/
    <div className="container"> 
      <UserCard name = "Sunita" description="desc1" image={sunita} style={{"border-radius":"10px"}}/>
      <UserCard name = "Vandana" description="desc2" image={vandana} style={{"border-radius":"10px"}}/>
      <UserCard name = "Gautam" description="desc3" image={gautam} style={{"border-radius":"10px"}}/>
    </div>
 
    // <div>
    //   <div className='container'>//we can user here only one div
    //     <UserCard/>
    //     <UserCard/>
    //     <UserCard/>
    //   </div>
    // </div>
    
  )
}

export default App
