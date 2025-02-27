import React from 'react'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavbarComp from './components/Navbar';
const App = () => {
  return (
   <Router> 
    <NavbarComp />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/skills' element={<Skill/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Contact' element={<Contact/>} />

    </Routes>

   </Router>
   
      
      
  
  )
}
export default App;