function Letter({ individualLetter }) {
  console.log(individualLetter);

  let color;

  //   if letter is in correct position, color is green, if letter is valid, color yelow
  if (individualLetter.validPosition) {
    color = "green letter";
  } else if (individualLetter.validLetter) {
    color = "yellow letter";
  } else {
    color = "letter";
  }
  //   display individual letter
  return <div className={color}>{individualLetter.letter}</div>;
}

export default Letter;
