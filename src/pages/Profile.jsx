import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext'
import { db } from '../services/firebase'
import { createImageUrl } from '../services/Movieservice'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import {  toast } from 'react-toastify';


const Profile = () => {

  const[movies,setMovies] = useState([])
  const {user} = UserAuth()

  useEffect(()=>{

    if(user){
      onSnapshot(doc(db, 'users',`${user.email}`),(doc)=>{
        if(doc.data()) setMovies(doc.data().favShows)
      } )
    }

  },[user?.email])

  if(!user){
    toast("you need to sigin")
  }

  return (
    <>
      <div>
        <div>
          <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
          <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font'>My Favourite Shows</h1>
            
          </div>
        </div>
      </div>
      
    
    
    
    </>
  )
}

export default Profile