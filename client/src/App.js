import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'

import Forgetpassword from './components/Forgetpassword'
import Resetpassword from './components/Resetpassword'

import Dashboard from './privatecomponents/Dashboard'

import Myprofile from './privatecomponents/Myprofile'
import Contact from './privatecomponents/Contact'
import Contact2 from './privatecomponents/Contact2'


import Teachers from './privatecomponents/Teachers'
import Feedback from './privatecomponents/Feedback'
import Admin from './components/Admin'
import AdminDashboard from './privatecomponents/AdminDashboard'
import Instructions from './privatecomponents/Instructions'

import "./App.css"
import Feedback2 from './privatecomponents/Feedback2'
import Feedback3 from './privatecomponents/Feedback3'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path="/instructions" exact element={<Instructions />} />
        <Route path='/admin' exact element={<Admin />} />
        <Route path="/adminDashboard" exact element={<AdminDashboard />} />
        <Route path='/forgetpassword' exact element={<Forgetpassword />} />
        <Route path='/resetpassword' exact element={<Resetpassword />} />

        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/myprofile' exact element={<Myprofile />} />
        <Route path="/feedback/:tname/:tid" exact element={<Feedback />} />
        <Route path="/feedback2" exact element={<Feedback2 />} />
        <Route path="/feedback3" exact element={<Feedback3 />} />

        
        <Route path='/teachers' exact element={<Teachers />} />
        

        <Route path='/contact' exact element={<Contact />} />
        <Route path='/contact2' exact element={<Contact2 />} />


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
