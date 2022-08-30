import * as React from "react";
import { currentQuestionContext } from "../store/context";

const FinalResult = () => {
  // state from context file
  const [, setcurrentQuestion, Result, setResult] = React.useContext(
    currentQuestionContext
  );
  // update state back to previous state i.e 0
  const onRestart = () => {
    setcurrentQuestion(0);
    setResult([]);
  };
  return (
    <div className="finalResult">
        {/* {iterating over the result} */}
      {Result.map((element, i) =>
    //   check if the question type is equal to chekcbox
        element.questionType === "checkbox" ? (
          <ul key={i}>
            <li>
              <b>
                {i + 1}) {element.question}
              </b>
            </li>
            {/* {iterate over the answers selected with checkbox} */}
            {element.answer.map(
              (element, i) =>
                element.answer && (
                  <li key={i}>
                    {i + 1}) {element.answer}
                  </li>
                )
            )}
          </ul>
        ) : (
            // {iterate over non checkbox element}
          <ul key={i}>
            <li>
              <b>
                {" "}
                {i + 1}) {element.question}
              </b>
            </li>
            {element.answer ? (
                // if the answer is selected
              <li>{element.answer}</li>
            ) : (
                // if no answer is selected
              <mark>No option selected</mark>
            )}
          </ul>
        )
      )}
        {/* {calling restart handler} */}
      <button className="RestartButton" onClick={onRestart}>Restart</button>
    </div>
  );
};

export default FinalResult;
