import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BoardPage from './pages/BoardPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  // http://localhost:5173/#/board
  // http://localhost:5173/#/profile
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/board" element={<BoardPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
