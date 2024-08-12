import { React, useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { gptSearchToggle, selectlanguage } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const languageOption =useSelector((store) => store.gpt.toggleButton);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTToggle = () => {
    dispatch(gptSearchToggle());
  };

  const handleLanguageChange =(e) =>{
    dispatch(selectlanguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());

        navigate("/");
        // User is signed out
        // ...
      }
    });

    //For Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 w-screen bg-gradient-to-b from-black px-10 py-2 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="netlix_logo" />
      {user && (
        <div className="flex p-4">
          {languageOption && <select className="bg-black text-white mr-2 rounded-lg text-center" onChange={handleLanguageChange}>
           {SUPPORTED_LANGUAGES.map((lang)=>(
            <option value={lang.identifier} key={lang.identifier}>{lang.name}</option> ))  }
          </select>}

          <button
            onClick={handleGPTToggle}
            className="bg-red-600 rounded-lg px-4 mr-2 text-lg font-bold"
          >
           {!languageOption ? "GPT Search" : "Home Page"}
          </button>
          <img
            src={user.photoURL}
            alt="user logo"
            className="w-12 h-12 rounded bg-black"
          ></img>
          <button className="font-bold pl-4 text-white" onClick={handleSignOut}>
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
