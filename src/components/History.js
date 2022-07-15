import Letter from "./Letter";
function History({ submittedWord, word }) {
  const answer = word.split("");
  console.log("answer", answer);

  const guessedWord = [];

  // turn guessed word into an array of objects with letter, validLetter, and validPosition
  submittedWord.split("").forEach((letter, i) => {
    guessedWord.push({
      letter: letter,
      // returns true, if letter is valid
      validLetter: answer.includes(letter),
      // returns true if letter is in correct position
      validPosition: answer[i] === submittedWord[i],
    });
  });
  console.log(guessedWord);

  return (
    // map through each word and display individual letter
    <div className="word">
      {guessedWord.map((letter, i) => (
        <Letter key={i} individualLetter={letter} />
      ))}
    </div>
  );
}

export default History;
