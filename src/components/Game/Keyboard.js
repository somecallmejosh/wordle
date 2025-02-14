export function Keyboard({ guessedLetters, answer }) {
  const top = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const middle = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const bottom = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

  const keyboardLetters = [top, middle, bottom]
  const guessed = guessedLetters.join('')
  const correctAnswer = answer.split('')

  const letterStyle = (letter) => {
    let style = ''

    for (const word of guessedLetters) {
      for (const [index, char] of [...word].entries()) {
        if (char === letter) {
          if (correctAnswer[index] === letter) {
            style = 'correct'
          } else if (style !== 'correct' && !correctAnswer.includes(letter)) {
            style = 'selected'
          } else if (style !== 'correct') {
            style = 'incorrect'
          }
        }
      }
    }

    if (!style) {
      style = guessed.includes(letter) ? 'selected' : ''
    }

    return style
  }

  return (
    <>
      <div className="keyboard">
        {keyboardLetters.map((row, index) => {
          return (
            <div key={index} className="keyboard-row">
              {row.map((letter, index) => {
                return (
                  <span key={index} className={letterStyle(letter, index)}>
                    {letter}
                  </span>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
