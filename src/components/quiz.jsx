


// Import React and useState hook
import React, { useState } from 'react';
// Import the Results component to display the final score
import Results from './results';


// Quiz component manages the quiz flow, user answers, and navigation
function Quiz(){
    // Array of question objects, each with a question, options, and correct answer
    const questionBank = [
        {
            question: "What is the fastest coding language?",
            option: ["C++", "Python", "Java", "JavaScript"],
            answer: "C++"
        },
        {
            question: "Which language is used for web apps?",
            option: ["PHP", "Python", "Javascript", "All"],
            answer: "All"
        },
        {
            question: "What does JSX stand for?",
            option: ["JavaScript XML", "Java SourceX", "JSON XML", "None of the above"],
            answer: "JavaScript XML"
        },
        {
            question: "What is a component in React?",
            option: ["Reusable piece of UI", "A JavaScript function", "A class", "None of the above"],
            answer: "Reusable piece of UI"
        },
        {
            question: "What kind of development does React support?",
            option: ["Web", "Mobile", "Both", "None of the above"],
            answer: "Both"
        },
        {
            question: "What function is used to set the value of a const?",
            option: ["setValue()", "getValue()", "useState()", "useConst()"],
            answer: "useState()"
        },
    ];

    // Initial state for user answers (null for unanswered)
    const initialAnswers = [null, null, null, null, null, null];
    // State to track user's selected answers
    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    // State to track the current question index
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // The option selected for the current question
    const optionSelected = userAnswers[currentQuestion];
    // State to track if the quiz is finished
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // Handles selecting an option for the current question
    function handleSelectOption(option){
        // Create a copy of the answers array and update the selected option
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
    } 

    // Moves to the next question or finishes the quiz if on the last question
    function goToNext(){
        if (currentQuestion === questionBank.length - 1){
            setIsQuizFinished(true);
        }
        else{
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    // Moves to the previous question
    function goToPrev(){
        if (currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    // Resets the quiz to the initial state
    function restartQuiz(){
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    // If the quiz is finished, show the Results component
    if (isQuizFinished){
        return(
            <Results userAnswers = {userAnswers} questionBank = {questionBank} restartQuiz = {restartQuiz} />
        )
    }

    // Render the current question, options, and navigation buttons
    return(
     <div> 
        {/* Display the current question number */}
        <h2> Question {currentQuestion+1} </h2>
        {/* Show the question text */}
        <p className="question"> {questionBank[currentQuestion].question} </p>

        {/* Render a button for each option, highlight if selected */}
        {questionBank[currentQuestion].option.map((option)=>(
            <button
                className={"option" + (optionSelected === option ? " selected" : "")}
                key={option}
                onClick={()=> handleSelectOption(option)}
            >
                {option}
            </button>
        ))}
        
        {/* Show which option is currently selected */}
        <p> Option Selected: {optionSelected} </p>

        {/* Navigation buttons for previous and next/finish */}
        <div className = "nav-buttons">
            <button onClick={()=> goToPrev()} disabled={currentQuestion===0} > Previous </button>
            <button
                onClick={()=> goToNext()}
                disabled={optionSelected === null}
            >
                {currentQuestion === questionBank.length-1 ? "Finish Quiz" : "Next"}
            </button>
        </div>
     </div>
    )
}

// Export the Quiz component as default
export default Quiz;