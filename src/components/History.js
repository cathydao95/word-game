function History({ display, guess, word }) {
  const guessHistory = display.map((item, index) => {
    return <div key={index}>{item}</div>;
  });
  return (
    <div>
      <div>{guessHistory}</div>
    </div>
  );
}

export default History;
