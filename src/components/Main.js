import { useState, useEffect } from "react";
import Form from "./Form";
import History from "./History";

function Main() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState();
  const [display, setDisplay] = useState([]);
  const [remaining, setRemaining] = useState(6);

  //   fetch the word of the day
  useEffect(() => {
    fetch("https://api.frontendeval.com/fake/word")
      .then((res) => res.text())
      .then((data) => setWord(data));
  }, []);

  // on inpiut change, set the guess
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

    if (isValid && remaining > 0) {
      setGuess("");
      setDisplay((prevDisplay) => [...prevDisplay, guess]);
      setRemaining((prevRemaining) => prevRemaining - 1);
    }
  }

  return (
    <div>
      <h1>You have {remaining} guesses remaining</h1>
      <Form
        getWord={getWord}
        checkWord={checkWord}
        guess={guess}
        setGuess={setGuess}
        display={display}
      />
      <History display={display} />
    </div>
  );
}

export default Main;
