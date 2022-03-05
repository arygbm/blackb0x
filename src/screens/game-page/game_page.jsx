import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './game_page.css'
import axios from 'axios';
import { Carousel } from 'react-carousel-minimal';
import AchievementTile from '../../components/achievement_tile/achievement_tile';
import GenreTile from '../../components/genre-tile/genre-tile';
const GamePage = () => {

 const location = useLocation()
 const [gameData, setGameData] = useState([])
 const [images, setImages] = useState([])
  const [movies, setMovies] = useState([])
  const [achievements, setAchievements] = useState([])
  const [genre,setGenre] = useState([])
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
        setGenre(res.data.genres)
        console.log(gameData)
        console.log(genre)
      }).catch(error =>console.log(error))

  console.log('incoming images')
      axios.get(`http://localhost:8000/games/${location.state.id}/screenshots`,
      {
      headers:{
          'Content-Type': 'application/json',
          
      } 
      }
  ).then(res => {
      //the game library appears here and assign codes using res.data.result
      setImages(res.data)
      console.log(images)
    }).catch(error =>console.log(error))



  console.log('incoming movies')

  axios.get(`http://localhost:8000/games/${location.state.id}/movies`,
  {
  headers:{
      'Content-Type': 'application/json',
      
  } 
  }
).then(res => {
  //the game library appears here and assign codes using res.data.result
  setMovies(res.data)
  console.log(movies)
}).catch(error =>console.log(error))
console.log('incoming achievements')
axios.get(`http://localhost:8000/games/${location.state.id}/achievements`,
{
headers:{
    'Content-Type': 'application/json',
    
} 
}
).then(res => {
//the game library appears here and assign codes using res.data.result
setAchievements(res.data)
console.log(achievements)
}).catch(error =>console.log(error))




},[]);
   return(
    <div>
      <img src={gameData.background_image} alt='game header' className='game-header-image'/>
      <h5 className='game-title'>
      {gameData.name}
      
      </h5>
      

      <h6 className='game-developers'>Developed by:{gameData.developers!=null?gameData.developers[0].name:null}</h6>
      <h6 className='install-button'>install</h6>
      <h6 className='game-esrb_rating'>
        {gameData.esrb_rating!=null?gameData.esrb_rating.name: null}
      </h6>
      <h6 className='game-metacritic'>
        {gameData.metacritic}
      </h6>
      <p className='description'>
        {gameData.description_raw}
      </p>

      <div className='reddit-card'>
          <span> 
          Reddits
          </span>
          <p>
          {gameData.reddit_description}
          </p>
       
      </div>

      <h2>Genres</h2>
      <div className='genre-list'>
     
      </div>
       
      {genre != null? genre.map((genre)=>(
          <GenreTile genreName={genre.name} genreIMG={genre.image_background} genreCount={genre.games_count}/>
        )): null}
      <h2>Screenshots</h2>

 

      <div className='screenshot-list'>

   
      {images.map((item, index)=>
    (
           <img src={item.image} alt='game-screenshot' className='game-screenshot'/>
         
     )
     
      )}
         </div>
      <h2>Movies</h2>
      <div  className='movie-list'>
      
      {movies.map((item, index)=>
    (
           <video width={'100%'} autoplay controls className='game-movies'>
              <source src={item.data.max} type="video/mp4"/>
             </video>
         
     )
     
      )}
      </div>
      <h2>Achievements</h2>
      {achievements.map((item, index)=>
    (
           
        <AchievementTile name={item.name} image={item.image}/>
     )
     
      )}
    </div>
  )
}



 
 
   



 
export default GamePage