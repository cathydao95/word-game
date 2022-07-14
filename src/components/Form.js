import { getByDisplayValue } from "@testing-library/react";

function Form({ guess, setGuess, display, checkWord, getWord }) {
  return (
    <div>
      <form onSubmit={checkWord}>
        <input
          onChange={getWord}
          type="text"
          minLength="5"
          maxLength="5"
          disabled={getByDisplayValue.length === 6}
        ></input>
        <button>Enter</button>
      </form>
    </div>
  );
}

export default Form;
