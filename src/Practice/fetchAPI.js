import React, { Component } from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("https://swapi.dev/api/people/1/")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    character: data,
                    isLoading: false
                })
            })
    }

    render() {
        const text = this.state.isLoading ? "Loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App
