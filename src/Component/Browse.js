import React from 'react'
import Header from './Header'
import useMovieList from '../Hooks/useMovieList'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  useMovieList();
  
  const toggles=useSelector((store) => store.gpt.toggleButton);

  return (
    <div >
      <Header/>
      {toggles ?( <GPTSearch/>) :( <>
      <MainContainer/>
      <SecondaryContainer/> 
      </>)}  
   
     
      </div>
  )
}

export default Browse