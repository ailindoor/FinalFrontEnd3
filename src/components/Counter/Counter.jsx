import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
  
    const handleAdd = () => {
      setCounter(counter + 1)
    }
  
    const handleSubtract = () => {
      setCounter(counter - 1)
    }
  
  return (
    <>
        <button onClick={handleAdd}>+</button>
        <span>{counter}</span>
        <button onClick={handleSubtract}>-</button>
    </>
  )
}

export default Counter
