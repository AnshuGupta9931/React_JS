import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const obj = {
    username : "Anshu Gupta",
    age : 18
  }
  return (
    <>
      <h1 className='bg-green-500 mb-5' >Tailwind Test </h1>
      <Card username = "Chaiaurcode" btntext="visit me" someobj = {obj} />
      <Card username= "webwala" btntext="click me"/>
    </>
  )
}

export default App
