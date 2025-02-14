export function Banner({ status, answer, guesses, children }) {
  return (
    <div>
      {status === 'lose' && (
        <div className="banner sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>!
          </p>
          {children}
        </div>
      )}
      {status === 'win' && (
        <div className="banner happy">
          <p>
            <strong>Congratulations!</strong> You got it in{' '}
            <strong>{guesses} guesses</strong>.
          </p>
          {children}
        </div>
      )}
    </div>
  )
}
