import * as React from "react";
import {currentQuestionContext} from '../store/context'
import {question} from '../utils/question';

const NextButton = () => {
  // state from context file
    const [currentQuestion ,setcurrentQuestion , Result , setResult] = React.useContext(currentQuestionContext)
  //function to handle multiple questions
  
    const handleNext = () => {
      // getting the form element by ID
      let formElement = document.forms.questionForm
      let formData = new FormData(formElement)
      // checking validation and options selections
     if (question.questions[currentQuestion].validation && !(formData.get((currentQuestion + 1).toString())) ) {
      alert("Choose any option")
      return
     }
     // checking current question is less then questions length & incrementing currentquestion 
        if (currentQuestion >= 0 && currentQuestion + 2 <= question.questions.length ){
            setcurrentQuestion(currentQuestion + 1)
        }
        // checking weather the selected question type is checkbox
        if (question.questions[currentQuestion].questiontype === "Checkbox") {
          let chekboxdata = []
          // iterating over selected checkbox
         question.questions[currentQuestion].questionoption.forEach((Option) => {
          let ans = {
            answer:formData.get((Option.optionid).toString())
          }
          chekboxdata.push(ans)
        }) 
        // updating Result context state of checkbox questions
        setResult([...Result , {
          questionType:"checkbox",
          question: question.questions[currentQuestion].question,
         answer: chekboxdata
        } ])

        }
        else{

          let ans = {
            question: question.questions[currentQuestion].question,
            answer:formData.get((currentQuestion + 1).toString()),
            questionType:question.questions[currentQuestion].questiontype
          
          }
        // updating Result context state of other question type
          setResult([...Result , ans ])
        }
      }


  return (
   
    <div  className='NextButtonContainer'>
      {/* {calling handlenext function} */}
    <button type="submit" onClick={handleNext}>
      {/* {checking last question} */}
      {question.questions.length !== (currentQuestion + 1) ? "NEXT" : "SUBMIT"}
    </button>
    </div>
  );
};

export default NextButton
