import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(5)

  // let counter=5

  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1)
    }
  }

  const removeValue = () =>{
    if (counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Bhargavi Deshmukh</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Add Value {counter}</button>
      <br/><br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
