import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div data-testid='component-counter'>
      <h1 data-testid='counter-display'>The count is {count}</h1>
      <button
        data-testid='increment-button'
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default Counter
