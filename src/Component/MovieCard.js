import React from 'react'
import { POSTER_URL } from '../utils/constant'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
      <div className="w-36 md:w-48 pr-4">
        <img alt="Movie Card" src={POSTER_URL + posterPath} />
      </div>
    );
  };

export default MovieCard