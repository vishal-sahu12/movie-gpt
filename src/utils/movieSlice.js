import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        topRatedMovies:null,
        popularMovies:null,
        upcomingMovies:null,


    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action) =>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;

        },
        addUpcomingMovie:(state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addTopRatedMovies:(state,action) =>{
            state.topRatedMovies = action.payload;
        }
        

    }
})

export const {addNowPlayingMovies,addTrailerVideo,addTopRatedMovies,addUpcomingMovie,addPopularMovies} =movieSlice.actions;
export default movieSlice.reducer;