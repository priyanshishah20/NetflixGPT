import React, { useState, useRef } from 'react';
import Header from './Header';
import {checkValidData} from '../utils/validate';

const Login = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(false);
    const toggleSignUpForm = () => {
        console.log('clicked');
        setIsSignUpForm(!isSignUpForm);
    }

    const fname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errMsg, setErrMsg] = useState('');

    const handleBtnClick = () => {
        // form data validation
        console.log('Email', email);
        console.log(email.current.value);
        console.log(password.current.value);
        const errorMsg = checkValidData(fname.current.value, email.current.value, password.current.value);
        console.log(errorMsg);
        setErrMsg(errorMsg);
    }

    return (
        <>
        <Header/>
        <div className='bg-linear-to-b from-black/60'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f86b16bf-4c16-411c-8357-22d79beed09c/web/IN-en-20251222-TRIFECTA-perspective_d4acb127-f63f-4a98-ad0b-4317b0b3e500_large.jpg' alt='Netflix Background' 
            className='w-full h-screen object-cover absolute -z-10'
            />
            <div className='pt-[4.188rem]'>
                <div className='w-4/12 mx-auto bg-black/70 p-8'>
                    <h1 className='text-white font-bold text-2xl'>{isSignUpForm? 'Sign Up' : 'Sign In'}</h1>
                    <form onSubmit={(e)=> e.preventDefault()}>
                    {isSignUpForm && <>
                    <input type='text' ref={fname} placeholder='Full Name' className='w-full p-3 mt-6 border border-gray-500 text-white rounded-md'/>
                        </>}
                    <input type='text' ref={email} placeholder='Email or mobile number' className='w-full p-3 mt-6 border border-gray-500 text-white rounded-md'/>
                    <input type='password' ref={password} placeholder='Password' className='w-full p-3 mt-6 border border-gray-500 text-white rounded-md'/>
                    <p className='mt-2 text-red-500'>{errMsg}</p>
                    <button type="submit" onClick={handleBtnClick} className='bg-red-600 text-white w-full py-3 mt-6 font-bold rounded-md'>
                        {isSignUpForm? 'Sign Up' : 'Sign In'}</button>
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