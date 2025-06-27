import React, { useRef, useState } from 'react'

function UseRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current += 1; // Increment the ref value
        setCount(countRef.current); // Update the state to trigger a re-render
        console.log(`Count: ${countRef.current}`); // Log the current count
    };
  return (
    <div>
        <h1>UseRef Example</h1>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment Count</button>
        <p>Check the console to see the count value.</p>
    </div>
  )
}

export default UseRef