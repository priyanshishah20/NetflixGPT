import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
      {
          path: '/',
          element: <Login/>,
      },
      {
          path:'/browse',
          element: <Browse/>
      },
      {
        path: '/error',
        element: <Error/>
      }
  ]);

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        // Dispatch an action to add the user to the Redux store
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  }, [])

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>

  )
}

export default Body