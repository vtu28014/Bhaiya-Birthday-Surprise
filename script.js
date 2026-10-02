// ===============================
// PAGE CONTROL
// ===============================

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ===============================
// START SURPRISE
// ===============================

function startSurprise() {
    showPage("gift-question");
}


// ===============================
// NO BUTTON
// ===============================

let noCount = 0;

function chooseNo() {

    const message = document.getElementById("no-message");

    const messages = [
        "EXCUSE ME?! 😭",
        "Bhaiya... you really said NO?! 🥺",
        "After all the effort I put into this?! 😭",
        "Okay fine... NO GIFT FOR YOU. 🎁❌",
        "I'm officially disappointed in you. 😤",
        "Hmmph. 😒",
        "Okay okay... one last chance, beautiful gurllll. 💗"
    ];

    message.textContent = messages[Math.min(noCount, messages.length - 1)];

    noCount++;

    // After several NO clicks, give her another chance
    if (noCount >= 6) {

        setTimeout(() => {

            message.textContent =
                "Fineee... you get ONE more chance. Click YES. 😭💗";

            noCount = 0;

        }, 1200);
    }
}


// ===============================
// QUIZ QUESTIONS
// ===============================

const questions = [

    {
        question: "What does Bhaiya call me? 👀",
        answers: [
            "Nanna Garu 💗",
            "Mr. President 😎",
            "Professor 😂",
            "Single Fellow 🙄"
        ],
        correct: 0
    },

    {
        question: "What do we usually have during our late nights? 🌙",
        answers: [
            "Serious meetings 🤓",
            "Random talks + dirty-mind talks 😂",
            "Business discussions 💼",
            "Nothing. We sleep early 😇"
        ],
        correct: 1
    },

    {
        question: "What does Bhaiya LOVE doing to me? 😭",
        answers: [
            "Ignoring me",
            "Irritating me to death 😂",
            "Giving me money 💸",
            "Making me study"
        ],
        correct: 1
    },

    {
        question: "What does Bhaiya always tease me about? 👀",
        answers: [
            "My cooking",
            "My height",
            "Being SINGLE 😭",
            "My handwriting"
        ],
        correct: 2
    },

    {
        question: "What should Bhaiya NEVER lose? 🥹",
        answers: [
            "Her phone",
            "Her childish side 💗",
            "Her alarm",
            "Her Wi-Fi"
        ],
        correct: 1
    },

    {
        question: "What is one thing I truly love about Bhaiya? 💕",
        answers: [
            "Her cheerful nature",
            "Her funny and childish side",
            "The way she is herself",
            "ALL OF THESE 😭💗"
        ],
        correct: 3
    },

    {
        question: "After all this... does Bhaiya deserve her gift? 🎁",
        answers: [
            "YESSSSS 💗",
            "Obviously 😭",
            "Of course, beautiful gurllll ✨",
            "ALL OF THE ABOVE 😌"
        ],
        correct: 3
    }

];

let currentQuestion = 0;


// ===============================
// START QUIZ
// ===============================

function chooseYes() {

    currentQuestion = 0;

    showPage("quiz");

    loadQuestion();
}


// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

    const questionNumber =
        document.getElementById("question-number");

    const question =
        document.getElementById("question");

    const answers =
        document.getElementById("answers");

    const message =
        document.getElementById("quiz-message");

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    question.textContent = current.question;

    message.textContent = "";

    answers.innerHTML = "";

    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer;

        button.onclick = () => checkAnswer(index);

        answers.appendChild(button);

    });
}


// ===============================
// CHECK ANSWER
// ===============================

function checkAnswer(selectedAnswer) {

    const current = questions[currentQuestion];

    const message =
        document.getElementById("quiz-message");

    if (selectedAnswer === current.correct) {

        message.textContent = "Correct! 😌💗";

        currentQuestion++;

        if (currentQuestion >= questions.length) {

            setTimeout(() => {

                showPage("gift");

            }, 900);

        } else {

            setTimeout(() => {

                loadQuestion();

            }, 700);

        }

    } else {

        message.textContent =
            "Wronggg! 😂 Try again, Bhaiya!";

    }
}


// ===============================
// OPEN GIFT
// ===============================

function openGift() {

    const gift =
        document.querySelector(".big-gift");

    gift.style.animation = "none";

    gift.style.transform = "scale(1.3)";

    setTimeout(() => {

        showPage("final");

    }, 800);
}