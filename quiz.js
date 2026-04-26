const quizData = [
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: "Jupiter",
  },
];


const question = document.querySelector(".question");
const options = document.querySelector(".options");
const nextBtn = document.querySelector(".next-btn");
const progress = document.querySelector(".progress");

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

 

function loadQuestion() {
   const currentQuestion = quizData[currentQuestionIndex];

  progress.textContent = `${currentQuestionIndex + 1} of ${quizData.length}`;

  question.textContent = currentQuestion.question;

  options.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent = option;
    button.classList.add("option-btn");

    button.addEventListener("click", () => {
      selectedOption = option;
    });

    options.appendChild(button);
  });
}

function handleNext() { 
  const currentQuestion = quizData[currentQuestionIndex]; 
  if (selectedOption === null) {
    alert("Please select an answer before moving on!");
    return;
  }

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  selectedOption = null;

  
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    question.textContent = `Quiz completed! Your score: ${score} out of ${quizData.length}`;
    showResults();
  }
}

const showResults = () => {
  
  question.textContent = "Quiz Completed!";
   options.innerHTML = "";

  progress.textContent = `Your score: ${score} out of ${quizData.length}`;

  nextBtn.style.display = "none";
};

nextBtn.addEventListener("click", handleNext);

loadQuestion();