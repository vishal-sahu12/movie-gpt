import React from 'react'
import Header from './Header'
import { NETFLIX_BG_URL } from '../utils/constant'
const Login = () => {
  return (
    <div className='bg-gradient-to-b from-black '>
        <Header/>
        <div className='absolute'>
        <img src={NETFLIX_BG_URL} alt="netflix_background" className=''/>
        </div>
        <form className='absolute w-3/12 rounded-lg-7 bg-black bg-opacity-75 p-10 text-white my-40 mx-auto right-0 left-0'>
        <h2 className='text-4xl font-bold mb-3 '>Sign In</h2>
        <input type="text" placeholder='Email or Mobile Number' className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded'/>
        <input type="text" placeholder='Password' className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded'/>
        <button className='w-full mt-3 bg-red-700 p-2 rounded border-color'>Sign In</button>
        <h3 className='text-center mt-2'>OR</h3>
        <button className='w-full mt-1 bg-neutral-700 p-2 rounded bg-opacity-75'>Use a sign-in code</button>
        <h3 className='text-center py-3'>Forget Password?</h3>
        <div className='flex text-justify'>
        <input type="checkbox" className='mr-3 accent-black bg-slate-950 text-blue-grey ' />
        <label>Remember me</label>
        </div>
        <h3 className='py-3'>New to Netflix? <span className='font-bold'>Sign Up now</span></h3>
        <h4 className='text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-sky-600'>Learn more</span></h4>
        </form>

    </div>
  )
}

export default Login