
// Import React (not strictly necessary for functional components in modern React, but included for clarity)
import React from "react";
// Import the Quiz component (not used directly in this file, but may be used elsewhere)
import Quiz from "./quiz";

// Results component displays the user's score and a button to restart the quiz
// Props:
// - questionBank: array of question objects (each with an 'answer' property)
// - userAnswers: array of user's selected answers
// - restartQuiz: function to reset the quiz state
function Results({questionBank, userAnswers, restartQuiz}){
    // Calculates the user's score by comparing their answers to the correct answers
    function getScore(){
        let finalScore = 0;
        // Loop through each answer and increment score if correct
        userAnswers.forEach((answer, index) => { 
            if (answer === questionBank[index].answer){
                finalScore ++;
            }
        })
        return finalScore;
    }
    // Store the calculated score
    const score = getScore();
    return(
        <div>
            {/* Quiz completion message */}
            <h2> Quiz Completed! </h2>
            {/* Display the user's score out of the total number of questions */}
            <p> Your Score: {score}/{questionBank.length} </p>
            {/* Button to restart the quiz, calls the restartQuiz function from props */}
            <button className= "restart-button" onClick={() => restartQuiz()}> Restart Quiz </button>
        </div>
    )
}

// Export the Results component as default
export default Results;