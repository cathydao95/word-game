function Form({ guess, checkWord, getWord, display, match }) {
  return (
    <div className="form">
      <form onSubmit={checkWord}>
        <input
          onChange={getWord}
          type="text"
          value={guess || ""}
          minLength="5"
          maxLength="5"
          disabled={display.length === 6 || match}
        ></input>
        <button>Enter</button>
      </form>
    </div>
  );
}

export default Form;
