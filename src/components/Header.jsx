import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User signed out successfully');
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  return (
    <>
    <div className='flex justify-between py-4 px-8 absolute z-10 w-full'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="w-32"/>
      {user && (<div>
        {/* <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='Profile Icon' className='w-8 text-xs inline-block mr-4'/> */}
        <img src={user?.photoURL} alt='Profile Icon' className='w-8 text-xs inline-block mr-4'/>
        <button onClick={handleSignOut} className='font-medium text-sm hover:rounded-md hover:bg-gray-200 py-1.5 px-3'>Sign Out</button>
      </div>
      )}
    </div>
    </>
  )
}

export default Header