

import { questions } from './../../constants/questions.js';


function Game({ question, step, onClickVariant}) {

    const procentage = Math.round((step / questions.length) * 100)

    return (
        <>
            <div className="progress">
                <div style={{ width: `${procentage}%` }} className="progress__inner"></div>
            </div>
            {
                <>
                    <h1>{questions[step].title}</h1>
                    <ul>
                        {question.variants.map((variant, variantIndex) =>
                            <li key={variant} onClick={() => onClickVariant(step, variantIndex)}>
                                {variant}
                            </li>
                        )}
                    </ul>
                </>
            }

        </>
    );
}

export default Game;