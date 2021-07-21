import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes!"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                {/* <ChildComponent answer={this.state.answer} /> */}
            </div>
        )
    }
}

export default App