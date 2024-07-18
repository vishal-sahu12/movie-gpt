import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=> store.movies);
  
  return (
    movies && (
    <div className='bg-black'>
      <div className='-mt-80 relative pl-20 z-20'>

      <MovieList title={"Trending"} moviesList={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated Movies"} moviesList={movies?.topRatedMovies} />
      <MovieList  title={"Popular"} moviesList={movies?.popularMovies} />
     
      <MovieList title={"Upcoming"} moviesList={movies?.upcomingMovies} />
      

      </div>
    
     
      
      {
        /*
        
        MovieList- Popular
        MovieList- Trending
        MovieList - NowPlaying
        */
      }
    </div>
  )
  )
}

export default SecondaryContainer