import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Landingpage from './stores/pages/Landingpage';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchesPage  from './stores/pages/WatchesPage';
import MensFashionPage from './stores/pages/MensFashionPage';
import WomenDressingPage from './stores/pages/WomenDressingPage';
import FurniturePage from './stores/pages/FurniturePage';
import ACPage from './stores/pages/ACPage';
import KichenPage from './stores/pages/KichenPage';
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';
import WatchesSingle from './singles/WatchesSingle';
import MenSingles from './singles/MenSingles';
import WomesSingle from './singles/WomesSingle';
import ACSingles from './singles/ACSingles';
import FurnitureSingles from './singles/FurnitureSingles';
import KichenSingle from './singles/KichenSingle';
import UserCart from './stores/UserCart';
import axios from "axios";
import Login from './stores/pages/Login';
import ProtectedRoute from './stores/Components/ProtectedRoute';
import { AuthProvider } from './stores/context/AuthContext';


const App = () => {
 
  return (
    <div>
       <AuthProvider>
       
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element = {  <ProtectedRoute><Landingpage/></ProtectedRoute>  }/>
          <Route path='/Mobiles' element = { <ProtectedRoute><MobilePage/></ProtectedRoute>}/>
          <Route path='/Computers' element = { <ProtectedRoute><ComputerPage/></ProtectedRoute> }/>
          <Route path='/Watches' element = { <ProtectedRoute><WatchesPage/> </ProtectedRoute>}/> 
           <Route path='/MensFashion' element = { <ProtectedRoute><MensFashionPage/></ProtectedRoute> }/>
           <Route path='/WomenDressing' element = { <ProtectedRoute><WomenDressingPage/></ProtectedRoute> }/>
           <Route path='/Furniture' element = { <ProtectedRoute><FurniturePage/></ProtectedRoute> }/>
           <Route path='/AC' element = { <ProtectedRoute><ACPage/></ProtectedRoute> }/>
           <Route path='/Kichen' element = { <ProtectedRoute><KichenPage/></ProtectedRoute>}/>
           <Route path='/Cart' element = { <ProtectedRoute><UserCart/></ProtectedRoute>}/>

           <Route path='/Mobile/:id' element = { <ProtectedRoute><MobileSingle/></ProtectedRoute>}/>
           <Route path='/Computers/:id' element = { <ProtectedRoute><ComputerSingle/></ProtectedRoute>}/>
           <Route path='/Watches/:id' element = { <ProtectedRoute><WatchesSingle/></ProtectedRoute>}/>  
           <Route path='/MensFashion/:id' element = { <ProtectedRoute><MenSingles/></ProtectedRoute>}/>
           <Route path='/WomenDressing/:id' element = { <ProtectedRoute><WomesSingle/></ProtectedRoute>}/>
           <Route path='/AC/:id' element = { <ProtectedRoute><ACSingles/></ProtectedRoute>}/>
           <Route path='/Furniture/:id' element = { <ProtectedRoute><FurnitureSingles/></ProtectedRoute>}/>
           <Route path='/Kichen/:id' element = { <ProtectedRoute><KichenSingle/></ProtectedRoute>}/>

           <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     
     </AuthProvider>
    </div>
  )
}

export default App