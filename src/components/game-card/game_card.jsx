import React from 'react'
import { Link } from 'react-router-dom'
import './game_card.css'

const GameCard = ({gameName,gameIMG,gameReleased, gameGenre, gameData}) => (
 
    <div className='game-card' >
        <div>
        <img src={gameIMG} alt={gameName + ' name'}  className='thumbnail'/>
        {console.log(gameData)}
        <div >
       
        </div>
     

        <h4 className='card-title'> 
            
            {gameName}
        </h4>
        <h5 className='card-subtitle'>
            
            Released on: {gameReleased}
        </h5>
        <h5 className='card-text'>
            
            {gameGenre}
        </h5>
        <Link to ='/game'>
        <div className='learn-more-button'>
            <h5 className='learn-more-text'>
                Learn more
            
            </h5>
        </div>

        </Link>
        
        </div>

      
    </div>
)

export default GameCard