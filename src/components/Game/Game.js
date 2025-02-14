import React, { useRef, useEffect, useState } from 'react'
import Guess from './Guess'
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from '../../constants'
import { WORDS } from '../../data'
import { range } from '../../utils'
import { sample } from '../../utils'
import { Keyboard } from './Keyboard'
import { Banner } from './Banner'

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS))
  const [guess, setGuess] = useState('')
  const [guesses, setGuesses] = useState([])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('active')
  const inputRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    if (!validateInput()) return
    setGuess('')

    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)

    if (guess === answer) {
      setStatus('win')
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      answer !== guess && setStatus('lose')
    }
    return
  }

  function validateInput() {
    if (guess.length !== WORD_LENGTH) {
      setMessage(`Please enter a ${WORD_LENGTH}-letter word.`)
      return false
    } else if (!/^[A-Z]+$/.test(guess)) {
      setMessage('Please enter a word using only uppercase letters.')
      return false
    } else {
      setMessage('')
      return true
    }
  }

  function handleNewGame() {
    setStatus('active')
    setGuesses([])
    setAnswer(sample(WORDS))
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [status, setStatus])

  console.info({ answer })
  return (
    <>
      <div>
        <div className="guess-results">
          {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
            return <Guess key={index} guess={guesses[index]} answer={answer} />
          })}
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="guess-input-wrapper"
            noValidate
          >
            <label htmlFor="guess-input">
              Enter guess: {guesses.length + 1}/{NUM_OF_GUESSES_ALLOWED}
            </label>
            <input
              ref={inputRef}
              onChange={(event) => setGuess(event.target.value.toUpperCase())}
              disabled={status !== 'active'}
              id="guess-input"
              type="text"
              value={guess}
              pattern="[A-Z]{5}"
              aria-describedby="guess-input-error"
            />
            {message && (
              <p id="guess-input-error" aria-live="polite" className="error">
                {message}
              </p>
            )}
          </form>
          <Keyboard guessedLetters={guesses} answer={answer} />
          <Banner status={status} answer={answer} guesses={guesses.length}>
            <button onClick={handleNewGame}>New Game</button>
          </Banner>
        </div>
      </div>
    </>
  )
}

export default Game
