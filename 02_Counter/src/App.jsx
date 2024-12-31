import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  const addValue = ()=>{
   if(counter+1<=20) setCounter(counter+1)
    console.log("clicked and increased "+ counter)
  }
  const removeValue = ()=>{
   if(counter-1>=0) setCounter(counter-1)
    console.log("Clicked and decreased "+counter);
  }
  return (
    <>
      <h1>Anshu Gupta</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue} type="button">Increase value : {counter}</button>  
      <button onClick={removeValue}>Decrease Value : {counter}</button>      
    </>
  )
}

export default App
