import React, { createContext, useState } from "react";

// creating context 
const currentQuestionContext = createContext();

const Context = (props) => {
    // assigning state
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [Result, setResult] = useState([]);

 
  return (
    //assigning value to the context for its children
    <currentQuestionContext.Provider
      value={[currentQuestion, setcurrentQuestion, Result, setResult]}
    >
      {props.children}
    </currentQuestionContext.Provider>
  );
};

export { Context, currentQuestionContext };
