import React from 'react'
import { NETFLIX_LOGO,NETFLIX_BG_URL } from '../utils/constant'
const Header = () => {
  return (
    <div>
        <img src={NETFLIX_LOGO} alt="netlix_logo" className='absolute z-10 h-20 mt-5 ml-20 bg-gradient-to-r from-black to-white' />
        <img src={NETFLIX_BG_URL} alt="netflix_background" className=''/>
    </div>
  )
}

export default Header