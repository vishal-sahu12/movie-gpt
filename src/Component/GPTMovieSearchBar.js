import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GPTMovieSearchBar = () => {

    const langKey = useSelector((store) => store.gpt.language);

  return (
   

    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 rounded-lg grid grid-cols-12'>
        <input type="text" placeholder={lang[langKey].searchPlaceHolder} className='col-span-9 p-4 m-4 rounded-lg text-black' />
        <button className='bg-red-600  m-4 p-4 rounded-lg col-span-3 text-black font-bold'>{lang[langKey].search}</button>
        </form>
        
    </div>
  )
}

export default GPTMovieSearchBar