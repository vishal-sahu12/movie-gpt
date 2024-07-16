import { useEffect, useState } from "react";
import { API_Option, URL_Trailer } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  console.log(trailerVideo);
  useTrailerVideo();

  return (
    <iframe
      className="w-screen aspect-video bg-gradient-to-r from-black"
      src= {"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=RgWcqM2hX5jtPDFx&amp;start=34&autoplay=1&mute=1"}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default VideoBackground;
