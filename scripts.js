const questions = [
    { question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid"], answer: 0 },
    { question: "What is the capital of Germany?", options: ["Vienna", "Berlin", "Rome"], answer: 1 },
    { question: "What is the capital of Spain?", options: ["Lisbon", "Madrid", "Masallı"], answer: 1 },
    // Add more questions here (total 15-20)
    // Example:
    { question: "What is the largest planet in our solar system?", options: ["Kürdəmir", "Jupiter", "Mars"], answer: 1 },
    { question: "Who is favourite groupmate of Togrul in THE CAFI?", options: ["Aysel", "Cabir", "Mitri"], answer: 1 },
    // Add the rest of the questions in a similar format
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('startButton').onclick = function() {
    document.getElementById('quizContainer').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionNumber = document.getElementById('questionNumber');
    const questionText = document.getElementById('questionText');
    const buttons = document.querySelectorAll('button[onclick^="checkAnswer"]');
    
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = questions[currentQuestionIndex].question;
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = questions[currentQuestionIndex].options[i];
    }
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quizContainer').innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score}/${questions.length}</p>
    `;
}
