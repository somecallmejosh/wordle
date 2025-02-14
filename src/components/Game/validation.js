import { WORD_LENGTH } from '../../constants'
export function validateInput(guess) {
  let message = ''
  if (guess.length !== WORD_LENGTH) {
    message = `Please enter a ${WORD_LENGTH}-letter word.`
  } else if (!/^[A-Z]+$/.test(guess)) {
    message = 'Please enter a word using only uppercase letters.'
  }

  return message
}
