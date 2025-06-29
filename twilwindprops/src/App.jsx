// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
  const myobj={
    uname:"pink",
    age:21
  }
// array same
  return (
    <>
      <h1 className='bg-amber-400 py-4 mb-4'> Hello Priyanka</h1>
      <Card channel="priyanka" btn="click" someobj={myobj}/>
      <Card channel="aakash" />
    </>
  )
}

export default App
