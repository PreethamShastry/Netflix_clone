import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/Authcontext'
import {  toast } from 'react-toastify';

const Login = () => {
  const[rememberLogin, setRememberLogin] = useState(true)
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const{user, logIn} = UserAuth()
  const navigate = useNavigate()
 
  const handleFormSubmit = async(e) =>{
    e.preventDefault()
    try{
      await logIn(email, password)
      navigate('/')
      toast.success("SignUp successful")
    }
    catch(error){
      console.log(error)
    }
  }


return (
  <>
      <div className='w-full h-screen'>
         <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
         <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>

         <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[500px] mx-auto bg-black/60 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-snaserif text-center'>Log In</h1>
                  <form onSubmit={ handleFormSubmit } className='w-full flex flex-col py-4'>
                
                    <input className='p-3 my-2 rounded bg-gray-300' type="email" name="" id="" placeholder='email' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className='p-3 my-2 rounded bg-gray-300' type="password" name="" id="" placeholder='password' autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <button className='bg-red-600 p-3 my-6 rounded font-snaserif'>Login</button>
                   

                    <div className='flex justify-between items-center text-gray-400'>
                      <p>
                        <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e)=> setRememberLogin(!rememberLogin)}/> Remember me
                      </p>
                      <p>
                        Need help?
                      </p>

                    </div>
                    <p className='my-4'>
                      <span>New to Netfilx?</span>
                      <Link className='text-blue-800 p-1' to="/signup">SignUp</Link>
                    </p>



                  </form>
            </div>
          </div>


         </div>
      </div>

  
  
  
  
  </>
)
}

export default Login