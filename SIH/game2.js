const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score-text');

let questions = [
    {
        question: "What is the supreme law of the land in India?",
        options: ["Constitution of India", "Indian Penal Code", "Code of Civil Procedure", "Indian Evidence Act"],
        correctAnswer: 0
    },
    {
        question: "Who is the highest judicial authority in India?",
        options: ["Supreme Court", "High Court", "District Court", "Session Court"],
        correctAnswer: 0
    },
    {
        question: "What is the fundamental right guaranteed by Article 21 of the Constitution of India?",
        options: ["Right to Life and Personal Liberty", "Right to Freedom of Speech and Expression", "Right to Education", "Right to Equality"],
        correctAnswer: 0
    },
    {
        question: "What is the concept of 'Secularism' enshrined in the Indian Constitution?",
        options: ["Separation of Church and State", "Equality of all religions", "Freedom to practice any religion", "State religion is Hinduism"],
        correctAnswer: 1
    },
    {
        question: "Which article of the Indian Constitution guarantees the Right to Education?",
        options: ["Article 21A", "Article 14", "Article 19", "Article 25"],
        correctAnswer: 0
    },
    {
        question: "Who is the head of the executive branch of the Government of India?",
        options: ["President", "Prime Minister", "Chief Justice of India", "Speaker of the Lok Sabha"],
        correctAnswer: 1
    },
    {
        question: "What is the minimum age to be eligible to vote in India?",
        options: ["18 years", "21 years", "25 years", "30 years"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a fundamental duty enshrined in the Indian Constitution?",
        options: ["To respect the National Flag", "To abide by the Constitution", "To pay taxes", "To vote in elections"],
        correctAnswer: 3
    },
    {
        question: "What is the term of the President of India?",
        options: ["5 years", "6 years", "7 years", "Life-long"],
        correctAnswer: 0
    },
    {
        question: "Which article of the Indian Constitution deals with the procedure for amendment of the Constitution?",
        options: ["Article 368", "Article 370", "Article 371", "Article 372"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionsList.innerHTML = '';
    for (let i = 0; i < question.options.length; i++) {
        const option = document.createElement('li');
        option.innerHTML = `<input type="radio" id="option${i+1}" name="answer"><label for="option${i+1}" id="option${i+1}-text">${question.options[i]}</label>`;
        optionsList.appendChild(option);
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const answer = selectedOption.id.split('option')[1] - 1;
        if (answer === questions[currentQuestion].correctAnswer) {
            score++;
            scoreText.textContent = `Score: ${score} / ${questions.length}`;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            scoreText.textContent = `Score: ${score} / ${questions.length}`;
            questionContainer.style.display = 'none';
            scoreContainer.style.display = 'block';
        }
    }
}

displayQuestion();

submitBtn.addEventListener('click', submitAnswer);