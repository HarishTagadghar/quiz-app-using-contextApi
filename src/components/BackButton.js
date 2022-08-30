import * as React from "react";
import { currentQuestionContext } from "../store/context";

const BackButton = () => {
  // state from context file
  const [currentQuestion, setcurrentQuestion] = React.useContext(
    currentQuestionContext
  );
  //update currentquestion state for previous question
  const handleBackButton = () => {
    if (currentQuestion > 0) {
      setcurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    //Calling handlebackButton button to update state
    <div onClick={handleBackButton} className="BackButtonContainer">
      {/* {back icon as an image} */}
      <img
        alt="Back-button-icon"
        className="BackButtonIcon"
        src={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAhklEQVRIie3VMQoCMRBA0UfUCwjuzdZTW4i29lq6J9DGLYREC8kENR+mfiQhCb3ev5awikYH7HHCIgrd4IDbY9Yt0BA4h1aHS2hVeMCxgH46F2yj0XkmmZuxq4w+HVfKLT26iK2+KjxCNfEzxlcrb3Kd3uG/+2SW8DCYRt/iXMIyGu31vqs7z/iguNRZhxMAAAAASUVORK5CYII="
        }
      />
    </div>
  );
};

export default BackButton;
