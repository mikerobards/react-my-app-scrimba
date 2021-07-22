import React, { Component } from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/


class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        console.log(this.state.isLoggedIn)
        this.setState(prevState => {
            // const updatedState = prevState.isLoggedIn
            return {
                // isLoggedIn: !updatedState
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
        return (
            // <div>
            //     {
            //         this.state.isLoggedIn ?
            //             <h1>Logged In</h1> :
            //             <h1>Logged Out</h1>
            //     }
            //     <button onClick={this.handleChange}>
            //         {
            //             this.state.isLoggedIn ?
            //                 <span>Log Out</span> :
            //                 <span>Log In</span>
            //         }
            //     </button>
            // </div>


            <div>
                <h1>{displayText}</h1>
                <button onClick={this.handleChange}>{buttonText}</button>
            </div>

        )
    }
}

export default App
