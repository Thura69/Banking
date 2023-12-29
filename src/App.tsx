import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
import BlogView from './pages/Blog/[id]';
import Login from './pages/Login';


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/blog/:id' element={<BlogView/>} />
        <Route path='*' element={<PageNotFound/>} />  
    </Routes>
    </>
  )
}

export default App