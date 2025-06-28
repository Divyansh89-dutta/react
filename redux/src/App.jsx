import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './store/reducers/counterSlice'

function App() {
  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='h-screen w-full bg-gray-500 flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-white'>Counter: {value}</h1>
        <div className='flex justify-center items-center mt-5'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded mr-2'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <button
            className='bg-green-500 text-white px-4 py-2 rounded'
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
