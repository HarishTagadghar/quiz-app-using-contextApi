import * as React from "react";
import "./App.css";

import BackButton from "./components/BackButton";
import FinalResult from "./components/FinalResult";
import NextButton from "./components/NextButton";
import QuestionsContainer from "./components/QuestionsContainer";
import { currentQuestionContext } from "./store/context";
import { question } from "./utils/question";

function App() {
  // destructuring context to get third index value i.e Result
  const [, , Result] = React.useContext(currentQuestionContext);

  return (
    <div className="App">
      <div className="Container">
        {/* {rendering final result based on submit} */}
        {Result.length === question.questions.length ? (
          <FinalResult />
        ) : (
          <>
            <BackButton />
            <QuestionsContainer />
            <NextButton />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
