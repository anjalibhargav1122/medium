import React from 'react'
import Main from './pages/Main'
import Our from './pages/Our'
import Member from './pages/Member'
import { BrowserRouter, Routes, Route } from'react-router-dom'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/membership" element={<Member/>}/>
        <Route path="/ourstory" element={<Our/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

