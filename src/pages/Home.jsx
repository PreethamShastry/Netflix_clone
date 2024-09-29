import React from 'react'
import Hero from '../components/Hero'
import Movierow from '../components/Movierow'
import endpoints from '../services/Movieservice'

const Home = () => {
  return (
    <>
    <Hero/>
    <Movierow title='topRated' url={endpoints.topRated}/>
    <Movierow title='trending' url={endpoints.trending}/>
    <Movierow title='popular ' url={endpoints.popular }/>
    <Movierow title='comedy' url={endpoints.comedy}/>
    <Movierow title='upcoming' url={endpoints.upcoming}/>
    
    
    </>
  )
}

export default Home