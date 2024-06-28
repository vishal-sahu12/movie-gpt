import React from 'react'
import { NETFLIX_LOGO,USER_LOGO } from '../utils/constant'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {


const user = useSelector(store =>store.user);
const navigate = useNavigate();

  const handleSignOut =() =>{
    
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
});
  }


  return (
    <div className='absolute z-10 w-screen bg-gradient-to-b from-black px-10 py-2 flex justify-between'>
        <img className='w-44'
         src={NETFLIX_LOGO} alt="netlix_logo"  />
     { user && <div className='flex p-4'>
        <img src={user.photoURL} alt='user logo' className='w-12 h-12 rounded bg-black'>
        </img>
        <button className= 'font-bold pl-4' onClick={handleSignOut}>SignOut</button>
      </div>}
    </div>
  )
}

export default Header