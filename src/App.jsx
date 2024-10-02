import { useState } from 'react'


function App() {
  
  const hello = "Hello";

  const style ={
    fontSize:30
  }

  return (
    <>
     <div style={style}>{hello}</div>
     <div>{hello}</div>
    </>
  )
}

export default App
