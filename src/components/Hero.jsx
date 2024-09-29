import React, { useState, useEffect } from 'react'
import endpoints, { createImageUrl } from '../services/Movieservice';
import axios from "axios"
import {  toast } from 'react-toastify';
import '../styles/Hero.css'


const Hero = () => {

    const [movie,setMovie] = useState({});

    useEffect(() => {
       axios.get(endpoints.popular).then((response) =>{
       const movies = response.data.results;
       const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    //    console.log(randomMovie.title)
        setMovie(randomMovie)
        toast('Welcome! to NETFLIX', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Bounce"
            });
       } )
       
    },[])

    const turncate = (str, length) =>{

        if(!str) return "";

        return str.length > length ?  str.slice(0,length) + '...' : str



    }

    const { title, backdrop_path, release_date, overview } = movie

  return (
    <>
        <div className='w-full h-[550px] lg:h-[850px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black' />
                    <img className='h-full w-full object-cover object-top '
                     src={ createImageUrl(backdrop_path, "original")} alt="{title}" />

                     <div className='absolute w-full top-[45%] lg:top-[70%] p-4 md:p-8 '>
                        <h1 className='tetx-3xl md:text-6xl font-bold '>{title}</h1>
                        <div className='mt-8 mb-4'>
                            <button className='boderanime border border-gray-300 py-2 px-5 ml-4 uppercase  rounded p-2 cursor-pointer'>play</button>
                            <button className='border border-gray-300 py-2 px-5 ml-4 uppercase  rounded p-2 cursor-pointer'>watch later</button>
                        </div>
                        <p className='text-gray-400 font-sans'>{release_date}</p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200'>{turncate(overview,165)}</p>
                       
                     </div>
            </div>
        </div>

    
    
    </>
  )
}

export default Hero