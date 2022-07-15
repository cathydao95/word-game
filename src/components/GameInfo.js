function GameInfo({ remaining, word, match }) {
  let message;
  if (match) {
    message = `You correctly guessed the word in  ${remaining} tries`;
  } else if (remaining > 0 && !match) {
    message = `You have ${remaining} guesses remaning`;
  } else {
    message = `The word was ${word}`;
  }
  return <div>{message}</div>;
}

export default GameInfo;
