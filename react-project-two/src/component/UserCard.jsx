import React from 'react'
import vandana from '../assets/vandana.jpg'
import "./UserCard.css"
const UserCard = ( )=> {
  return(
    <div className="user-container">
      <p id="title">Vanadanatm</p>
      <img id='user-img' src={vandana} alt="vandana"></img>
      <p id="user-description">Description of Profile</p>


    </div>
    
  )
  }

  export default UserCard