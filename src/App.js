import { useState } from 'react';

import Game from './components/Game/Game';
import Result from './components/Result/Result';
import './index.scss';
import { questions } from './constants/questions';


function App() {

  const [step, setStep] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const question = questions[step];
  const totalAnswers = questions.length;

  const onClickVariant = (step, variantIndex) => {
    setStep( step + 1);
    if(questions[step].correct === variantIndex) {
      setCorrectAnswers(correctAnswers + 1);
    }
   
  }
  const resetState = () => {
    setStep(0)
    setCorrectAnswers(0)
  }

  return (
    <div className="app">
      {
        step !== questions.length
        ?
        <Game  question={question} step={step} onClickVariant={onClickVariant}/>
        :
        <Result correctAnswers={correctAnswers} totalAnswers={totalAnswers} resetState={resetState}/>
      }
      
    
    </div>
  );
}

export default App;
