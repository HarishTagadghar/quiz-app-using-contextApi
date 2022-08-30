import * as React from "react";
import { currentQuestionContext } from "../store/context";
import { question } from "../utils/question";

const QuestionsContainer = () => {
  // state from context file
  const [currentQuestion] = React.useContext(currentQuestionContext);

  return (
    <div className="QuestionsContainer">
      {/* {displaying the current question} */}
      <h2>
        {currentQuestion + 1}) {question.questions[currentQuestion].question}
        {question.questions[currentQuestion].validation ? (
          <span style={{ color: "red" }}>*</span>
        ) : null}
      </h2>
      <form id="questionForm">
        {/* {iterating over current questions options} */}
        {question.questions[currentQuestion].questionoption?.map((Option) => {
          return (
            <div key={Option.optionid}>
              <input
                defaultValue={Option.optionvalue}
                // assigning name based on input type
                name={
                  question.questions[currentQuestion].questiontype ===
                  "Checkbox"
                    ? Option.optionid
                    : question.questions[currentQuestion].questionid
                }
                // selecting input type
                type={question.questions[currentQuestion].questiontype}
              />
              <label>{Option.optionvalue}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
};
export default QuestionsContainer;
