import React from 'react'
import { useSelector } from 'react-redux'

function App() {
  const value = useSelector((state)=>state.counter);
  console.log(d);
  return (
    <div className='h-screen w-full bg-gray-500'>App</div>
  )
}

export default App