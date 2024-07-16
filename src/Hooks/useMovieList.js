import { useDispatch } from "react-redux";
import { API_Option } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useMovieList =()=>{
const dispatch = useDispatch()  
const getNowPlaying = async()=>{

  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-Us&page=1', API_Option);

  const json = await data.json();
  dispatch(addNowPlayingMovies(json.results));

}
 

useEffect( ()=>{
  getNowPlaying();
},[]);
}

export default useMovieList;