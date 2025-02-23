import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapExample from './pages/BootstrapExample'
import Header from './components/Header'

function App() {
  const hello = 'Hello'

  const style = {
    fontSize: 30,
  }

  return (
    <>
      <Header></Header>
      <div style={style}>{hello}</div>
      <div>{hello}</div>
      <BootstrapExample />
    </>
  )
}

export default App
