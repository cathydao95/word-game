function GameInfo({ remaining, word, match }) {
  let message;
  if (match) {
    message = `You correctly guessed the word in  ${6 - remaining} tries`;
    // if not matched have guesses remaining
  } else if (remaining > 0 && !match) {
    message = `You have ${remaining} guesses remaining`;
    // if no more guesses remaining, display word
  } else {
    message = `The word was ${word}`;
  }
  return <div>{message}</div>;
}

export default GameInfo;
