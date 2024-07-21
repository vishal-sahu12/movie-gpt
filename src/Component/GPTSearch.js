import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import GPTMovieSearchBar from './GPTMovieSearchBar'

const GPTSearch = () => {
  return (
    <div>
        <GPTMovieSearchBar/>
        <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch