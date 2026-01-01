import React, {useEffect} from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User signed out successfully');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        // Dispatch an action to add the user to the Redux store
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
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

  return (
    <>
    <div className='flex justify-between py-4 px-8 absolute z-10 w-full'>
      <img src={logo} alt="Netflix Logo" className="w-32"/>
      {user && (<div>
        <img src={user?.photoURL} alt='Profile Icon' className='w-8 text-xs inline-block mr-4'/>
        {/* <span>{user?.displayName}</span> */}
        <button onClick={handleSignOut} className='font-medium text-sm hover:rounded-md hover:bg-gray-200 py-1.5 px-3'>Sign Out</button>
      </div>
      )}
    </div>
    </>
  )
}

export default Header