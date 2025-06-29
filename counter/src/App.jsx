import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count=10;
  let [count ,setCount]=useState(0)

  const addValue=()=>{
      // console.log("clicked", count);
      // count=count+1
      setCount(count+1)
  }

  const removeValue=()=>{
   

    if(count>0){
       setCount(count-1)
    
    }
}


  return (
   <>
   
   <h1>Counting..</h1>
   <h2>Counter value :{count}</h2>

   <button onClick={addValue}>Add value </button>
  <br /> <br />
   <button onClick={removeValue}>Remove value</button>
   </>
  )
}

export default App
