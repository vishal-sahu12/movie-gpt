import React from 'react'
import { NETFLIX_LOGO } from '../utils/constant'
const Header = () => {
  return (
    <div className='absolute z-10  bg-gradient-to-b from-black px-10 py-2 ml-20'>
        <img className='w-44'
         src={NETFLIX_LOGO} alt="netlix_logo"  />
    </div>
  )
}

export default Header