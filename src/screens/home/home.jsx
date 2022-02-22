import React from 'react'
import { Component } from 'react/cjs/react.production.min'
import GameCard from '../../components/game-card/game_card'
import GenreTile from '../../components/genre-tile/genre-tile'
import Header from '../../components/header/header'
import Hero from '../../components/Hero/Hero'
import './home.css'

class Home extends Component {
    

    state = {
        games: [],
        genres:[]
      }

      fetchUpcoming() {
          fetch(`https://api.rawg.io/api/games?key=60a3a4e6c1dc496b84eef0a2b8d33fa5&page_size=10`)
         
              .then(response => response.json())
          
              .then(data =>
                  this.setState({
                      games: data.results
                  })
              )
              fetch(`https://api.rawg.io/api/genres?key=60a3a4e6c1dc496b84eef0a2b8d33fa5&count=1`)
         
              .then(response => response.json())
          
              .then(data =>
                  this.setState({
                      genres: data.results
                  })
              )
    }

    componentDidMount(){
        this.fetchUpcoming();
       
    }

    render(){
        return(
            <div className='home'>
            <Header/>
            <Hero/>
             
            
               <h2>Featured</h2>
               <h3>Games</h3>
               { this.state.games.map((game) => (
    



                <GameCard gameName={game.name} gameIMG={game.background_image} gameReleased={game.released}/>
   
           
               
               
            ))}
               <h2>Genres</h2>
                <div className='genre-list'>
                { this.state.genres.map((genre) => (
    



    <GenreTile genreName={genre.name} genreIMG={genre.image_background} gamesCount={genre.games_count}/>




))}
                </div>
            </div>
        )
    }
}
export default Home 