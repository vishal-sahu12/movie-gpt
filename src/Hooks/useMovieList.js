import { useDispatch } from "react-redux";
import { API_Option } from "../utils/constant";
import { useEffect } from "react";
import { addNowPlayingMovies,addPopularMovies,addTopRatedMovies, addUpcomingMovie,} from "../utils/movieSlice";

const useMovieList =()=>{
const dispatch = useDispatch()  
const getNowPlaying = async()=>{

  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-Us&page=1', API_Option);

  const json = await data.json();
  dispatch(addNowPlayingMovies(json.results));

}

const getTopRatedMovies = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Option)

  const jsonData = await data.json();
  dispatch(addTopRatedMovies(jsonData.results));
}

const getPopularMovies = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_Option)

  const jsonData = await data.json();
  dispatch(addPopularMovies(jsonData.results));
}
const getUpComingMovies = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Option)

  const jsonData = await data.json();
  dispatch(addUpcomingMovie(jsonData.results));
}

 

useEffect( ()=>{
  getNowPlaying();
  getPopularMovies();
  getTopRatedMovies();
  getUpComingMovies();
},[]);
}

export default useMovieList;