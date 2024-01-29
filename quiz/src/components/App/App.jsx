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
    title: "Что такое HTML?",
    variants: ["HyperText Markup Language",
      "High-Level Text Management Language",
      "Hyper Transfer Text Language"],
    correct: 0,
  },
  {
    title: "Что означает аббревиатура CSS?",
    variants: ["Computer Style Sheets",
    "Creative Style Sheets",
    "Cascading Style Sheets"],
    correct: 2,
  },
  {
    title: "Какой символ используется для комментариев в большинстве языков программирования?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Что делает оператор if в языках программирования?",
    variants: ["//", " #", " --"],
    correct: 0,
  },
  {
    title: "Что такое Git?",
    variants: ["Графический редактор", "Система контроля версий", "Программный язык"],
    correct: 1,
  },
  {
    title: "Какая структура данных используется для хранения упорядоченной коллекции элементов в JavaScript?",
    variants: ["Stack", "Queue", "Array"],
    correct: 2,
  },
  {
    title: "Какой язык программирования был разработан для создания динамических веб-страниц?",
    variants: ["Python", "JavaScript", "Ruby"],
    correct: 1,
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

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          percentTarget={percentTarget}
        />
      ) : (
        <Result correct={correct} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
