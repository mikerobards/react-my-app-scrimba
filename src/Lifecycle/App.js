import React, { Component } from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        //get the data I need to correct display
    }

    componentWillReceiveProps(nextProps) { //depreciated with React 17
        // used to check if nextProps are dif from current props
        if (nextProps.whatever !== this.props.whatever) {
            // do something
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not 
    }

    componentWillUnmount() {
        // E.G. remove event listener
        // teardown or cleanup your code before your component disappears
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App

// render is like getting dressed for the day. Re-running render is like changing your clothes later in the day
// componentDidMount is like being born. Most common use is for an API call
// componentWillReceiveProps is like someone giving you a gift
// shouldComponentUpdate is like making a decision on whether you shoud change your clothes or not
// component end lifecycle.

