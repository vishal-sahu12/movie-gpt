import React from 'react'
import play from '../utils/play-button-svgrepo-com.svg'

const VideoTitle = ({title,summary}) => {
  return (

  <div className='pt-[15%] px-[8%] absolute text-white w-screen aspect-video  bg-gradient-to-r from-black'>

        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className="text-l w-1/3 text-justify py-8">{summary}</p>
        <div className='flex'>
            <button className='bg-white px-12 text-lg py-2 rounded  mr-5 flex item-center text-black hover:bg-red-800 hover:text-white'>
            <img className ="mt-[12%] mr-2"src={play} alt="icon" width="24" height="24" />
            Play
            </button>
            <button className='bg-gray-600 text-black px-12 text-lg py-2 rounded bg-opacity-50 hover:bg-red-800 text-white'> More Info</button>
        </div>
    </div>

  )
}

export default VideoTitle