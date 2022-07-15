import { useState, useEffect } from "react";
import Form from "./Form";
import History from "./History";
import GameInfo from "./GameInfo";

function Main() {
  const [word, setWord] = useState([]);
  const [guess, setGuess] = useState();
  const [display, setDisplay] = useState([]);
  const [remaining, setRemaining] = useState(6);
  const [match, setMatch] = useState(false);

  //   fetch the word of the day
  useEffect(() => {
    fetch("https://api.frontendeval.com/fake/word")
      .then((res) => res.text())
      //   .then((data) => setWord(data.split("")));
      .then((data) => setWord(data));
  }, []);

  console.log(word, guess);
  // on input change, set the guess
  function getWord(event) {
    console.log(event.target.value);
    setGuess(event.target.value);
  }

  //   when submit clicked, check if word is valid and tries remaning
  async function checkWord(event) {
    event.preventDefault();

    const isValid = await fetch(
      "https://api.frontendeval.com/fake/word/valid",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word: guess,
        }),
      }
    ).then((res) => {
      return res.json();
    });
    // if guessed word is valid and there are guesses remamining...
    if (isValid && remaining > 0) {
      setGuess("");
      setDisplay((prevDisplay) => [...prevDisplay, guess]);
      setRemaining((prevRemaining) => prevRemaining - 1);
    }
  }

  //   how to prevent useeffect from running at the begginning bc at the beggining both are matched
  useEffect(() => {
    if (display.length > 0 && display.slice(-1).toString() === word) {
      console.log("ITS A MATCH");
      setMatch((prevMatch) => !prevMatch);
    }
  }, [display, word]);

  return (
    <div>
      <GameInfo match={match} remaining={remaining} word={word} />
      <Form
        getWord={getWord}
        checkWord={checkWord}
        guess={guess}
        setGuess={setGuess}
        display={display}
        match={match}
      />
      {/* map through each word in display */}
      <div className="container">
        {display.map((item) => (
          <History key={item} submittedWord={item} word={word} />
        ))}
      </div>
      {/* <History display={display} match={match} /> */}
    </div>
  );
}

export default Main;
