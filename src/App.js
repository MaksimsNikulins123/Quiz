import './index.scss';

const questions = [
  {
    title: 'React - it is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - it is ... ',
    variants: ['application', 'part of application or page', "that I don't know"],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'It is simple HTML',
      'It is function',
      'It ir the same as HTML,  but with options to run JS code',
    ],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>What is useState?</h1>
      <ul>
        <li>It is function to store component data</li>
        <li>It is global state</li>
        <li>It is when it doesn't need for anyone else</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Game />
      {/* <Result /> */}
    </div>
  );
}

export default App;
