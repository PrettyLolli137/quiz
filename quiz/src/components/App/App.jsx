import React from "react";
import Game from "../Game/Game";
import Result from "../Result/Result";
import "./App.css";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },

  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },

  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
];

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const percentTarget = Math.round((step / questions.length) * 100);

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct){
      setCorrect(correct + 1);
    } 
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          percentTarget={percentTarget}
        />
      ) : (
        <Result correct={correct} totalQuestions={questions.length}/>
      )}
    </div>
  );
}

export default App;
