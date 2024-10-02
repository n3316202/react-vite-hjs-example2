import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootStrapButton from './BootstrapExample'
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
      <BootStrapButton />
    </>
  )
}

export default App
