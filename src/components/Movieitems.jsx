import React, { useState } from 'react'
import { createImageUrl } from '../services/Movieservice'
// import { BsHeart } from "react-icons/bs";
import {FaRegHeart, FaHeart } from "react-icons/fa";
import{ arrayUnion, doc, updateDoc } from 'firebase/firestore'
import{ db } from '../services/firebase'
import {UserAuth } from '../context/Authcontext'
import {  toast } from 'react-toastify';

const Movieitems = ( {movie} ) => {

    const[like,setLike] = useState(false)
    const {user} = UserAuth()

    const{title, backdrop_path, poster_path} = movie;

    const markFav = async() =>{
      const userEmail = user?.email

      if(userEmail){
        const userDoc = doc(db, "users", userEmail)
        setLike(!like)
        await updateDoc(userDoc, {
          favShows: arrayUnion({ ...movie }),
        })
        toast.success("Movie sucessfully added to MyFavShows")
      }
      else{
        toast.error("LogIn to save movie")
      }


    }
    


  return (
    <>
        <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
            <img src={createImageUrl(backdrop_path, "original")} alt="{title}" />
            <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
                <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full '>{movie.title}</p>
                <p onClick={ markFav }>{ like ? <FaHeart size={20} className='absolute top-2 left-2 text-gray-300'/> : <FaRegHeart size={20} className='absolute top-2 left-2 text-gray-300' /> }</p>
            </div>
        </div>
    
    
    </>
  )
}

export default Movieitems