import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './game_page.css'
import axios from 'axios';

const GamePage = () => {

 const location = useLocation()
 const [gameData, setGameData] = useState([])

 useEffect(() => {
  // Update the document title using the browser API
 
  console.log('game data incoming')
  console.log(location.state.id)
 
    axios.get(`http://localhost:8000/games/${location.state.id}`,
        {
        headers:{
            'Content-Type': 'application/json',
            
        } 
        }
    ).then(res => {
        //the game library appears here and assign codes using res.data.result
        setGameData(res.data)
    }).catch(error =>console.log(error))

    console.log(gameData)



},[]);
   return(
    <div>
      <h3>
      {gameData.name}
      
      </h3>
      <p>
        {gameData.description}
      </p>

    </div>
  )
}



 
 
   



 
export default GamePage