import { useState } from "react";

const questions = [
  {
    question: "The Earth is flat.",
    correctAnswer: false,
  },
  {
    question: "The sun rises in the east.",
    correctAnswer: true,
  },
  {
    question: "Water boils at 100°C at sea level.",
    correctAnswer: true,
  },
  {
    question: "Lightning never strikes the same place twice.",
    correctAnswer: false,
  },
  {
    question: "Humans have 206 bones in their body.",
    correctAnswer: true,
  },
  {
    question: "Bats are blind.",
    correctAnswer: false,
  },
  {
    question: "Mount Everest is the tallest mountain in the world.",
    correctAnswer: true,
  },
  {
    question: "Python is a type of snake as well as a programming language.",
    correctAnswer: true,
  },
  {
    question: "The Great Wall of China is visible from space.",
    correctAnswer: false,
  },
  {
    question:
      "William Shakespeare wrote 'To be, or not to be' in his play Hamlet.",
    correctAnswer: true,
  },
];

export default function App() {
  return (
    <div>
      {questions.map((question, index) => (
        <QuestionBox key={index} question={question} />
      ))}
    </div>
  );
}
function QuestionBox({ question }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  function handleClick(answer) {
    setSelectedAnswer(answer);
  }
  const isCorrectAnswer = selectedAnswer === question.correctAnswer;
  return (
    <div className="card">
      <h2>{question.question}</h2>
      <button onClick={() => handleClick(true)}>True</button>
      <button onClick={() => handleClick(false)}>False</button>
      {selectedAnswer !== null && (
        <p className={isCorrectAnswer ? "correct" : "wrong"}>
          Correct Answer : {question.correctAnswer ? "True" : "False"}
        </p>
      )}
    </div>
  );
}
