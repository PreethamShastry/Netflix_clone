import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      {/* <div className='text-5xl text-red-500'>this is netflix clone</div> */}
      
      <Navbar/>
      
    
      



      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
        
      </Routes>
      <ToastContainer />
     

    
    
    
    
    
    </>
  );
}

export default App;
