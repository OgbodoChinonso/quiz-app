const quizData = [
  {
    question: "What does URL stand for in relation to the internet?",
    options: ["Universal Router Land", "Unicorn Restart Loop", "Uniform Rotation Latitude.", "Uniform Resource Locator."],
    answer: "Uniform resource locator.",
  },
  {
     question: "What natural force keeps us on the ground?",
    options: ["Gravity", "Police", "Imagination", "Pillow"],
    answer: "Gravity",
  },
  {
    question: "What is H2O more commonly known as?",
    options: ["Rice", "Kunu", "Water", "Rock of Ages"],
    answer: "Water",
  },
  {
    question: "W How many colors are in a rainbow ?",
    options: [4, 5, 6, 7],
    answer: 7,
  },
  {
    question: "What is the name of the fairy in Peter Pan?",
    options: ["Declan Rice", "Kaka", "Tinker Bell", "De Rock"],
    answer: "Thinker Bell",
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

  currentQuestion.options.forEach((option) => {
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

    nextBtn.textContent = 'Restart Quiz';
};

 nextBtn.addEventListener("click", () => {
  if (nextBtn.textContent === "Restart Quiz") {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    nextBtn.textContent = "Next";
    loadQuestion();
  } else {
    handleNext();
  }
});
 loadQuestion()