function Result({correctAnswers, totalAnswers, resetState}) {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>You've got {correctAnswers} correct answers  from {totalAnswers}</h2>
        {/* <button onClick={() => window.location.href='/'}>Try one more time</button> */}
        <button onClick={() => resetState()}>Try one more time</button>
      </div>
    );
  }

  export default Result;