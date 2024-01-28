import "./Game.css";

function Game({ question, onClickVariant,percentTarget  }) {

  return (
    <>
      <div className="progress">
      <div style={{ width: `${percentTarget}%` }} className="progress__inner"></div>
      </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((text, index ) => ( 
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
            ))}
        </ul>
    </>
  );
}

export default Game;
