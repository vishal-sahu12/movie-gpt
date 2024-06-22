import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <div className=' flex justify-center items-center w-full'>
        <Header/>
        <form className='absolute p-6 rounded-lg-6 bg-black bg-opacity-75 text-white  p-3 '>
        <h2 className='text-4xl'>Sign In</h2>
        <input type="text" placeholder='Email or Mobile Number' className='bg-black bg-opacity-85 p-3 rounded-lg-10  mt-6 w-7/8   text-justify border-white'/>
        <input type="text" placeholder='password' className='bg-black bg-opacity-85 p-3 rounded-lg-10  mt-3 w-60 text-justify border-gray-100 ' />
        <button className='w-60 mt-3 bg-red-700 p-2 rounded-lg-7 border-color'>Sign In</button>
        <h3 className='text-center mt-2'>OR</h3>
        <button className='w-60 mt-1 bg-stone-700 p-2 rounded-lg-7 bg-opacity-75'>Use a sign-in code</button>

        <h3>Forget Password?</h3>
        <div className='flex text-justify'>
        <input type="checkbox" />
        <h3>Remember Me</h3>
        </div>
        <h3>New to Netflix? Sign up now</h3>
        <h4>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h4>
        </form>

    </div>
  )
}

export default Login