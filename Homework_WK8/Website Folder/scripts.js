// Math Game JS

// Define constants
const questionP = document.querySelector("#question");
const answerInput = document.querySelector("#answer");  
const checkBtn = document.querySelector("#check");
const resultP = document.querySelector("#result");

// Define variables
var score = 0;
var currentQuestion;
var currentAnswer;
var operator;

// Define functions
function generatorQuestion() // Generator a new question
{
    // Generate first number & second number between 0 to 100.
    const firstNum = Math.floor(Math.random() * 101);
    const secNum = Math.floor(Math.random() * 101);

    // Generate operator
    const rand = Math.floor(Math.random() * 4);
    if (rand === 0) operator = "+";
    else if (rand === 1) operator = "-";
    else if (rand === 2) operator = "/";
    else if (rand === 3) operator = "*";
    else return "ERROR, random operator failed to generate.";

    // Set the current generator question to current question variable
    currentQuestion = firstNum + " " + operator + " " + secNum;

    // Set the current answer variable into the new generated question evaluated
    currentAnswer = eval(currentQuestion);

    // Return currentQuestion
    return currentQuestion;
}

function displayQuestion() // Display the current question
{
    // Display the current question
    questionP.innerText = currentQuestion; 
}

function checkAnswer() //Check the answerInput value if its equal to currentAnswer variable
{
    // Check if answer from answerInput value is equal to currentAnswer variable.
    if (answerInput === currentAnswer) 
    {
        resultP.innerText = "Correct answer";
        return true;
    }   
    resultP.innerText = "wrong answer";
    return false;
}

// Add event listener to check button
checkBtn.addEventListener("click", function()
{
    if (checkAnswer()) generatorQuestion();
    displayQuestion();
});

// Generate and display new question after all function, constants, variables, and listeners are declared
generatorQuestion();
displayQuestion();
