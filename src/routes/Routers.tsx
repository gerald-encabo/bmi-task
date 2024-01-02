import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from "react";
import ArtistMusic from '@/pages/ArtistMusic';

const Home = lazy(() => import("@/pages/Home")
  .then(module => { 
    return { 
      default: module.default
    } 
  })
);

const Routers = () => {
  return (
    <Routes>
        <Route 
          path='*' 
          element={ <Navigate to='/home' /> } 
        />
        <Route 
          path='/home' 
          element={ <Home /> } 
        />
        <Route 
          path='/artist-music-details/:artistId' 
          element={ <ArtistMusic /> } 
        />
    </Routes>
  )
}

export default Routers