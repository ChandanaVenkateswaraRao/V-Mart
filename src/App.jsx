import React from 'react'
import { Route, Routes } from 'react-router-dom';
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
const App = () => {
  function loginHandler() {
      axios.post("https://dummyjson.com/auth/login", {username:"emilys", password:'emilyspass'})
  }
  return (
    <div>

      <button onClick={e=>loginHandler()}>login</button>
      <Routes>
          <Route path='/' element = {  <Landingpage/>}/>
          <Route path='/Mobiles' element = {<MobilePage/>}/>
          <Route path='/Computers' element = {<ComputerPage/> }/>
          <Route path='/Watches' element = {<WatchesPage/> }/> 
           <Route path='/MensFashion' element = {<MensFashionPage/> }/>
           <Route path='/WomenDressing' element = {<WomenDressingPage/> }/>
           <Route path='/Furniture' element = {<FurniturePage/> }/>
           <Route path='/AC' element = {<ACPage/> }/>
           <Route path='/Kichen' element = {<KichenPage/>}/>
           <Route path='/Cart' element = {<UserCart/>}/>

           <Route path='/Mobile/:id' element = {<MobileSingle/>}/>
           <Route path='/Computers/:id' element = {<ComputerSingle/>}/>
           <Route path='/Watches/:id' element = {<WatchesSingle/>}/>  
           <Route path='/MensFashion/:id' element = {<MenSingles/>}/>
           <Route path='/WomenDressing/:id' element = {<WomesSingle/>}/>
           <Route path='/AC/:id' element = {<ACSingles/>}/>
           <Route path='/Furniture/:id' element = {<FurnitureSingles/>}/>
           <Route path='/Kichen/:id' element = {<KichenSingle/>}/>

           
      </Routes>
     
     
    </div>
  )
}

export default App
