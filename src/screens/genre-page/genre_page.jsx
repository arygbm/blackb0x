import React, { useEffect, useState } from 'react'
import './genre_page.css'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import GameCard from '../../components/game-card/game_card'
const GenrePage = () => {
    const location = useLocation()

    const [gamesOnGenre, setGamesOnGenre] =useState([])
    useEffect(()=>{

        console.log('game data incoming')

        axios.get(`http://localhost:8000/games/${location.state}`,
        {
        headers:{
            'Content-Type': 'application/json',
            
        } 
        }
    ).then(res => {
        //the game library appears here and assign codes using res.data.result
        setGamesOnGenre(res.data)
       
        console.log(gamesOnGenre)
      
      }).catch(error =>console.log(error))
    },[])
   return( 
    <div>
  

       <h3>{gamesOnGenre.name} Games </h3>
       <p>{gamesOnGenre.description}</p>
       {/* {gamesOnGenre!=null?gamesOnGenre.map((game)=>(
           <GameCard gameName={game.name} gameIMG={game.background_image} gameReleased={game.released} gameData={game}/>
       )):null} */}
    </div>)

}
export default GenrePage