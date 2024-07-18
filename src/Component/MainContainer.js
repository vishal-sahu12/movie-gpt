import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { number } from '../utils/constant'

const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if (movies=== null) return;


    const mainMovie= movies[number];
    const {original_title,overview,id}=mainMovie
  return (
    <div>
       
        <VideoTitle title={original_title} summary={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer