function Letter({ individualLetter, checkedAnswer }) {
  console.log(individualLetter, checkedAnswer);

  //   display individual letter
  return (
    <div className={checkedAnswer || "letter"}>
      {individualLetter.toUpperCase()}
    </div>
  );
}

export default Letter;

// function Letter({ individualLetter, checkedAnswer }) {
//   console.log(individualLetter, checkedAnswer);

//   let color;

//   //   if letter is in correct position, color is green, if letter is valid, color yelow
//   if (individualLetter.validPosition) {
//     color = "green letter";
//   } else if (individualLetter.validLetter) {
//     color = "yellow letter";
//   } else {
//     color = "grey letter";
//   }
//   //   display individual letter
//   return <div className={color}>{individualLetter.letter.toUpperCase()}</div>;
// }

// export default Letter;
