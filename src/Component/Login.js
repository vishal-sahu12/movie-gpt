import React, { useRef, useState } from 'react'
import Header from './Header'
import { NETFLIX_BG_URL } from '../utils/constant'
import {checkValidData} from '../utils/validate'


const Login = () => {

  const [signIn,setSignIn] = useState(true);

  const [errorMsg,setErrorMsg] = useState()

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const toggleSignIn = ()=>{
    setSignIn(!signIn);
  }

  const handleButtonClick =() =>{
    
    const msg = checkValidData(name.current.value,email.current.value,password.current.value);
    setErrorMsg(msg);
    console.log(msg);
    
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src={NETFLIX_BG_URL} alt="netflix_background" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 rounded-lg bg-black bg-opacity-75 p-10 text-white my-40 mx-auto right-0 left-0'>
        <h2 className='text-4xl font-bold mb-3 '>{signIn ? "Sign In" : "Sign Up"}</h2>
        {!signIn && <input ref={name} type="text"  placeholder='Name' className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded'/>

        }

        <input ref={email} type="text" placeholder='Email or Mobile Number'  className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded'/>
        <input ref={password} type="text" placeholder='Password' className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded'/>
       {errorMsg!=null &&  <p className='text-bold text-red-600 text-lg py-2'>{errorMsg}</p>}
        <button className='w-full mt-3 bg-red-700 p-2 rounded border-color' onClick={handleButtonClick}>{signIn ? "Sign In" : "Sign Up"}</button>
        {signIn &&  <div>
          <h3 className='text-center mt-2'>OR</h3>
                <button className='w-full mt-1 bg-neutral-700 p-2 rounded bg-opacity-75'>Use a sign-in code</button>
                <h3 className='text-center py-3'>Forget Password?</h3>
                <div className='flex text-justify'>
                <input type="checkbox" className='mr-3 accent-black bg-slate-950 text-blue-grey ' />
                <label>Remember me</label>
                </div>
        </div>      
        }
        <h3 className='py-3' >{signIn ? "New to Netflix?" : "Already Registered?"} <span className='font-bold cursor-pointer' onClick={toggleSignIn}>{signIn ? "Sign Up Now" : "Sign In Now"}</span></h3>

        {signIn && <h4 className='text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-sky-600'>Learn more</span></h4>
        }
        </form>

    </div>
  )
}

export default Login