import React from 'react'
import Joke from './Joke.js'
import jokesData from './jokesData.js'

function App() {
    const jokeComponents = jokesData.map(item =>
        <Joke
            joke={item}
            key={item.id}
        />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

// class App extends React.Component {

//     jourMethod() {

//     }

//     render() {
//         const style = this.yourMethod()
//         const date = new Date()
//         return (
//             <div>
//                 <h1>{this.props.whatever}</h1>
//             </div>
//         )
//     }
// }

export default App