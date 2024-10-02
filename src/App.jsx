import { useState } from 'react'


function App() {
  
  const hello = "안녕하세요";

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
