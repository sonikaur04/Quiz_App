const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
// Get elements from the DOM
const startBtn = document.getElementById("startBtn");
const startPage = document.querySelector(".start-page");
const quizContainer = document.querySelector(".quiz-container");


startBtn.addEventListener("click", () => {
    startPage.style.display = "none";
    quizContainer.style.display = "block";
   
});
function checkAnswer(optionIndex) {
    // Replace this with your logic to check the correctness of the answer
    return optionIndex === 2; // Example: Assuming option with index 2 is the correct answer
}

const options = document.querySelectorAll(".options label");

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        const isCorrect = checkAnswer(index);

        // Remove any existing "selected" class
        options.forEach(option => option.classList.remove("selected"));

        // Apply appropriate class based on correctness
        if (isCorrect) {
            option.classList.add("selected", "correct");
        } else {
            option.classList.add("selected", "incorrect");
        }
    });
});



const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Madrid", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "Which river is known as the Ganges in India?",
        options: [" Brahmaputra", "Yamuna", " Godavari", " Indus"],
        answer: "Yamuna"
    },
    {
        question: " What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"],
        answer: " New Delhi "
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Subhas Chandra Bose ", "Sardar Patel", "Mahatma Gandhi ", "Jawaharlal Nehru "],
        answer: "Mahatma Gandhi"
    },
    {
        question: "Which state is known as the Land of Five Rivers?",
        options: ["Punjab", "Kerala", " Gujarat", "Rajasthan"],
        answer: "Punjab"
    },
    {
        question:  "Which city is known as the IT Capital of India?",
        options: ["Mumbai", "Hyderavad", " Bangalore", " Chennai"],
        answer: "Bangalore"
    },
    {
        question: "Which ocean is the largest and the deepest?",
        options: ["  Atlantic Ocean", " Indian Ocean", " Pacific Ocean", "  Arctic Ocean"],
        answer: " Pacific Ocean"
    },
    {
        question: "Which planet is known as the Morning Star or the Evening Star?",
        options: [" Mars", "Venus", " Jupiter", " Saturn"],
        answer: " Venus"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("label");
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}">${option}`;
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (!selectedOption) return;

    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    resultElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
    submitButton.style.display = "none";
}

submitButton.addEventListener("click", checkAnswer);

displayQuestion();
