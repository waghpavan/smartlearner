import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from '../components/Navbar'

import Home from '../components/Home'
import Dashboard from '../components/Dashboard/Dashboard'
import Courses from '../components/Courses/Courses'
import MyCourses from '../components/Mycourses/MyCourses';
import UserTest from '../components/UserTest/UserTest'

import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'

import Footer from '../components/Footer'

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Dashboard/:courseId' element={<Dashboard/>}/>
            <Route path='/Dashboard/' element={<Dashboard/>}/>
            <Route path='/UserTest/:test' element={<UserTest/>}/>
            <Route path='/mycourses/' element={<MyCourses/>}/>
            <Route path='/Courses' element={<Courses/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Routing
