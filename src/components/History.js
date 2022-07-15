import Letter from "./Letter";
function History({ submittedWord, word }) {
  // word of the day split into an array of letters
  const answer = word.split("");
  console.log("answer", answer);
  const checkedAnswer = answer.map((item) => "");

  // gussed word split into an array of letters
  const guessedWord = submittedWord.split("");

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === guessedWord[i]) {
      if (!checkedAnswer[i]) {
        checkedAnswer[i] = "green letter";
      }
    } else if (guessedWord.includes(answer[i])) {
      const targetIndex = guessedWord.indexOf(answer[i]);
      if (!checkedAnswer[targetIndex]) {
        checkedAnswer[targetIndex] = "yellow letter";
      }
    }
  }

  console.log(checkedAnswer);

  return (
    // map through each word and display individual letter
    <div className="word">
      {guessedWord.map((letter, i) => (
        <Letter
          key={i}
          individualLetter={letter}
          checkedAnswer={checkedAnswer[i]}
        />
      ))}
    </div>
  );

  // const answer = word.split("");
  // console.log("answer", answer);
  // const checkedAnswer = answer.map((item) => false);

  // const guessedWord = [];

  // // turn guessed word into an array of objects with letter, validLetter, and validPosition
  // submittedWord.split("").forEach((letter, i) => {
  //   guessedWord.push({
  //     letter: letter,
  //     // returns true, if letter is valid
  //     validLetter: answer.includes(letter),
  //     // returns true if letter is in correct position
  //     validPosition: answer[i] === submittedWord[i],
  //   });
  // });
  // console.log(guessedWord);

  // return (
  //   // map through each word and display individual letter
  //   <div className="word">
  //     {guessedWord.map((letter, i) => (
  //       <Letter
  //         key={i}
  //         individualLetter={letter}
  //         checkedAnswer={checkedAnswer}
  //       />
  //     ))}
  //   </div>
  // );
}

export default History;
