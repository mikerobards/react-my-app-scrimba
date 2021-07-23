import React, { Component } from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/people/1/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    character: data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.character.name}
            </div>
        )
    }
}

export default App
