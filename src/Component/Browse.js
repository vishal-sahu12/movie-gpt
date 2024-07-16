import React from 'react'
import Header from './Header'
import useMovieList from '../Hooks/useMovieList'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useMovieList();

  return (
    <div >
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>
  )
}

export default Browse