import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Movieitems from './Movieitems'


const Movierow = ({title, url}) => {


    const[movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(url).then( (response) => setMovies(response.data.results))
        
     },[url])

     console.log(movies)

  return (
    <>
    
        <h2 className='font-sans-bold md:text-xl p-4 uppercase'>{title}</h2>

        <div className='relative flex items-center'>
            <div  id={`slider`}className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

                {movies.map((movie)=>(
                    <Movieitems key={movie.id} movie={movie}/>
                ))}

            </div>

        </div>
    
    
    </>
  )
}

export default Movierow