import React, { useRef, useState } from 'react';
import Header from './Header';
import { NETFLIX_BG_URL } from '../utils/constant';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const email = useRef();
  const password = useRef();
  const names = useRef();
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg) {
      return;
    }

    if (!signIn) {
      // For Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: names.current.value, photoURL: "https://avatars.githubusercontent.com/u/68978850?v=4"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email, displayName: displayName, photoURL: photoURL
            }));
          }).catch((error) => {
            setErrorMsg(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      // For Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className='absolute inset-0'>
        <img src={NETFLIX_BG_URL} alt="netflix_background" className="object-cover w-full h-full" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute w-11/12 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 rounded-lg bg-black bg-opacity-75 p-8 md:p-10 text-white my-20 mx-auto right-0 left-0'>
        <h2 className='text-2xl md:text-4xl font-bold mb-3'>{signIn ? "Sign In" : "Sign Up"}</h2>
        {!signIn && <input ref={names} type="text" placeholder='Name' className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded' />}
        <input ref={email} type="text" placeholder='Email or Mobile Number' className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded' />
        <input ref={password} type="password" placeholder='Password' className='bg-neutral-900 bg-opacity-70 px-2 py-3 w-full mt-3 rounded' />
        {errorMsg && <p className='text-bold text-red-600 text-lg py-2'>{errorMsg}</p>}
        <button className='w-full mt-3 bg-red-700 p-2 rounded border-color' onClick={handleButtonClick}>{signIn ? "Sign In" : "Sign Up"}</button>
        {signIn && (
          <div>
            <h3 className='text-center mt-2'>OR</h3>
            <button className='w-full mt-1 bg-neutral-700 p-2 rounded bg-opacity-75'>Use a sign-in code</button>
            <h3 className='text-center py-3'>Forget Password?</h3>
            <div className='flex items-center'>
              <input type="checkbox" className='mr-3 accent-black bg-slate-950 text-blue-grey' />
              <label>Remember me</label>
            </div>
          </div>
        )}
        <h3 className='py-3'>{signIn ? "New to Netflix?" : "Already Registered?"} <span className='font-bold cursor-pointer' onClick={toggleSignIn}>{signIn ? "Sign Up Now" : "Sign In Now"}</span></h3>
        {signIn && <h4 className='text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-sky-600'>Learn more</span></h4>}
      </form>
    </div>
  );
};

export default Login;
