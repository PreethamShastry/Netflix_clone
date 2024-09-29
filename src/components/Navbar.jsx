import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/Authcontext'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Navbar = () => {

    const {user, logOut} = UserAuth()
    const navigate =  useNavigate()

    const handleLogOut = async() =>{
        try {
            await logOut()
        } catch (error) {
            console.log(error)
            
        }

    }
    const [text] = useTypewriter({
        words: ['etflix'],
        loop:{},
    })

  return (
    <>
    
        <div className='absolute w-full p-4 flex items-center justify-between z-50'>
            <Link to="/">
                <h1 className='uppercase text-5xl text-red-700 font-bold cursor-pointer'>
                    n
                    <span className='uppercase text-5xl text-red-700 font-bold cursor-pointer'>
                        {text}
                        <Cursor/>
                    </span>
                    
                </h1>
            </Link>

            {user?.email ? (
                    <div>
                        <Link to="/profile">
                            <button className='uppercase pr-3 cursor-pointer'>profile</button>
                        </Link>
    
                        
                        <button onClick={ handleLogOut } className='uppercase bg-red-700 rounded p-2 cursor-pointer'>Log out</button>
                        
                    
                    </div>
                    ):(
                        <div>
                            <Link to="/login">
                                <button className='uppercase pr-3 cursor-pointer'>login</button>
                            </Link>
            
                            <Link to="/signup">
                                <button className='uppercase bg-red-700 rounded p-2 cursor-pointer'>sign-up</button>
                            </Link>
                        </div>
            
                )
            }

            
        </div>

        
    
    
    
    </>
  )
}

export default Navbar