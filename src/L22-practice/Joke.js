import React from 'react'

function Joke(props) {
    return (
        <div className="joke">
            <h3>{props.joke.question}</h3>
            <p>{props.joke.punchLine}</p>
        </div>
    )
}

export default Joke