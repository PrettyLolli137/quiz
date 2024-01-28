import logo from './../../images/win.png';
import "./Result.css";

function Result({correct, totalQuestions }) {
  return <div className="result">
<img src={logo} alt="победа"></img>
<h2> Вы отгадали {correct} вопроса из {totalQuestions}</h2>
<a href='/'>
<button> Попробовать снова? </button>
</a>
</div>;
}

export default Result;
