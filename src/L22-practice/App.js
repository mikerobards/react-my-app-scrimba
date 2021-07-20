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

export default App