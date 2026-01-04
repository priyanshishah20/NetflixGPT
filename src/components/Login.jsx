import React, { useState, useRef } from 'react';
import { bgUrl, userAvatar } from '../utils/constants';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const [isSignUpForm, setIsSignUpForm] = useState(false);
    const toggleSignUpForm = () => {
        setIsSignUpForm(!isSignUpForm);
    }

    const fname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errMsg, setErrMsg] = useState('');

    const handleBtnClick = () => {
        // form data validation
        // console.log(email.current.value + ' ' + password.current.value);
        const errorMsg = checkValidData(fname.current?.value, email.current?.value, password.current?.value, isSignUpForm);
        setErrMsg(errorMsg);

        if (errorMsg) return; // if there is an error, stop further execution

        if (isSignUpForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log('User signed up:', user);

                    updateProfile(user, {
                      displayName: fname.current.value, photoURL: userAvatar
                    }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
                        
                    }).catch((error) => {
                      setErrMsg("Error: " + error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg("Singup Error: " + errorCode + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log('User signed in:', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg("Signin Error: " + errorCode + errorMessage);
                });
        }
    }

    return (
        <>
            <Header />
            <div className='bg-linear-to-b from-black/60'>
                <img src={bgUrl} alt='Netflix Background'
                    className='w-full object-cover absolute -z-10'
                />
                <div className='pt-[4.188rem]'>
                    <div className='w-4/12 mx-auto bg-black/70 p-8'>
                        <h1 className='text-white font-bold text-2xl'>{isSignUpForm ? 'Sign Up' : 'Sign In'}</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            {isSignUpForm && <>
                                <input type='text' ref={fname} placeholder='Full Name' className='w-full p-3 mt-6 border border-gray-500 text-white rounded-md' />
                            </>}
                            <input type='text' ref={email} placeholder='Email or mobile number' className='w-full p-3 mt-6 border border-gray-500 text-white rounded-md' />
                            <input type='password' ref={password} placeholder='Password' className='w-full p-3 mt-6 border border-gray-500 text-white rounded-md' />
                            <p className='mt-2 text-red-500'>{errMsg}</p>
                            <button type="submit" onClick={handleBtnClick} className='bg-red-600 text-white w-full py-3 mt-6 font-bold rounded-md'>
                                {isSignUpForm ? 'Sign Up' : 'Sign In'}</button>
                            <p className='text-white text-center underline font-medium mt-4'>Forgot password?</p>
                            {isSignUpForm ?
                                <><p className='text-gray-500 font-medium mt-4'>Already an user?
                                    <a onClick={toggleSignUpForm} className='text-white font-bold cursor-pointer'> Sign in now</a></p>
                                </>
                                :
                                <><p className='text-gray-500 font-medium mt-4'>New to Netflix?
                                    <a onClick={toggleSignUpForm} className='text-white font-bold cursor-pointer'> Sign up now</a></p>
                                </>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;