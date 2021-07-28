import React, { useState } from "react"


function App() {
    const [answer] = useState("yes") // whatever you pass in here is the initial state
    // uses array destructuring
    console.log(answer)
    return (
        <div>
            <h1>Is state important to know? {answer}</h1>
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