import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTMovieSearchBar from './GPTMovieSearchBar'
import { NETFLIX_BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div className=''>
        <div  className='absolute -z-10'>
        <img src={NETFLIX_BG_URL} alt="bg"/>
        </div>
        
        <GPTMovieSearchBar/>
        <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch