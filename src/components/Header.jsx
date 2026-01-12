import React, { useEffect } from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';
import { toggleSearchView, clearSearchResults } from '../utils/searchSlice';
import { supportedLanguages } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const searchView = useSelector(store => store.search.searchView);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //console.log('User signed out successfully');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // Dispatch an action to add the user to the Redux store
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [])

  const handleMovieSearch = () => {
    if (!searchView) {
      // Entering search mode, clear previous results
      dispatch(clearSearchResults());
    }
    dispatch(toggleSearchView());
  }

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    console.log("Selected Language: ", selectedLang);
    dispatch(changeLanguage(selectedLang));
  }

  return (
    <>
      <div className='flex flex-col justify-center gap-6 md:gap-0 items-center md:flex-row md:justify-between md:items-start py-4 px-8 md:px-16 absolute z-10 w-full'>
        <img src={logo} alt="Netflix Logo" className="w-32" />
        {user && (<div className='flex flex-wrap items-center'>
          {searchView && (<>
              <select onChange={handleLangChange}
                className='border border-gray-500 p-1 rounded-md text-white bg-black text-sm'>
                {supportedLanguages.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier} className='text-white bg-black'>{lang.name}</option>
                ))}
              </select>
            </>)}
          <button onClick={handleMovieSearch} className='mx-4 font-medium text-sm rounded-md bg-purple-500 text-white py-1.5 px-3'>{searchView ? 'Home Page' : 'Search'}</button>
          <img src={user?.photoURL} alt='Profile Icon' className='hidden w-8 text-xs md:inline-block mr-4' />
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleSignOut} className='font-medium text-sm rounded-md bg-black/10 hover:bg-gray-200 hover:text-black py-1.5 px-3'>Sign Out</button>
        </div>
        )}
      </div>
    </>
  )
}

export default Header