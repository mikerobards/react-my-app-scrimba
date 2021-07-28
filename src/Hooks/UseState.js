import React, { useState } from "react"


function App2() {
    const [answer] = useState("yes") // whatever you pass in here is the initial state
    // uses array destructuring
    console.log(answer)
    return (
        <div>
            <h1>Is state important to know? {answer}</h1>
        </div>
    )
}

function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes") //use another key/value in state that is unrelated


    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function displayAnswer() {
        setAnswer(prevAnswer => prevAnswer === "No" ? "Yes" : "No")
    }

    return (
        <div>
            <h1>{count}</h1>
            <h1>{answer}</h1>

            <button onClick={increment}>Increment!</button>
            <button onClick={decrement}>Decrement!</button>
            <button>onClick={displayAnswer}Answer</button>
        </div>
    )
}

class App1 extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}

export default App