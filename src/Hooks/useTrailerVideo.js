import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_Option, URL_Trailer } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';
import { number } from '../utils/constant';
const useTrailerVideo = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  const moviesId = movies[number]?.id
  console.log(moviesId);

    const dispatch = useDispatch()
   const getTrailer = async () => {
    const data = await fetch(URL_Trailer+moviesId+'/videos?language=en-US', API_Option);
    const jsonData = await data.json();

    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
};

  useEffect(() => {
    getTrailer();
  }, []);
}

export default useTrailerVideo