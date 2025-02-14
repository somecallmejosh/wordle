export function Banner({ status, answer, guesses }) {
  return (
    <div>
      {status === 'lose' && (
        <div className="banner sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>!
          </p>
        </div>
      )}
      {status === 'win' && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong> You got it in{' '}
            <strong>{guesses} guesses</strong>.
          </p>
        </div>
      )}
    </div>
  )
}
