import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootStrapButton from './BootstrapExample'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BoardPage from './pages/BoardPage'
import ProfilePage from './pages/ProfilePage'
import routes from './route/Routes'
import HeaderNav from './components/HeaderNav'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={route.path || index}
                path={route.path}
                element={route.element}
              ></Route>
            )
          })}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
