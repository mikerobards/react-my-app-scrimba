import React, { useState, useEffect } from "react"
import randomColor from "randomcolor"

// side effects - anything that reaches outside of the component to do something: network request, manual DOM manip, event listeners, timeouts and intervals


function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        setColor(randomColor())
    }, [count])
}

return (
    <div>
        <h1 style={{ color: color }}>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
)
}

export default App
