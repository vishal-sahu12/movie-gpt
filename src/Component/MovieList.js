// import React from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, moviesList }) => {
//     return (
//       <div className="px-6">
//         <h1 className="text-xl md:text-3xl py-5 text-white">{title}</h1>
//         <div className="flex overflow-auto">
//           <div className="flex ">
//             {moviesList?.map((movie) => (
//               <MovieCard key={movie.id} posterPath={movie.poster_path} />
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

// export default MovieList;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesList }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 7, // Adjust this value to show more or fewer slides
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="px-6">
      <h1 className="text-xl md:text-3xl py-5 text-white">{title}</h1>
      <Slider {...settings}>
        {moviesList?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
