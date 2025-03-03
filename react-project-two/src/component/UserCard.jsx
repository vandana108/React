import React from 'react'

import "./UserCard.css"
const UserCard = (props)=> {//for multiple username
  return(
    // <div className="user-container">
    //   <p id="title">Vanadanatm</p>
    //   <img id='user-img' src={vandana} alt="vandana"></img>
    //   <p id="user-description">Description of Profile</p>


    // </div>

    <div className="user-container" style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt='{props.name}'></img>
      <p id='user-desc'>{props.description}</p>
   </div>
    
  )
  }

  export default UserCard