import React from 'react'
import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

function Guess({ guess, answer }) {
  const userGuess = checkGuess(guess, answer)
  return (
    <p className="guess">
      {!guess ? (
        <>
          {range(5).map((index) => (
            <span key={index} className="cell"></span>
          ))}
        </>
      ) : (
        <>
          {userGuess.map((result, index) => (
            <span key={index} className={`cell ${result.status}`}>
              {result.letter}
            </span>
          ))}
        </>
      )}
    </p>
  )
}
export default Guess
