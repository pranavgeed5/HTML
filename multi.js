const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
let score = 0;

generateQuestion();

formEl.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    const correctAns = num1*num2;
    const userAns = inputEl.value;
    if (correctAns === userAns ) {
        score++;
        
    } 
    else {
      score--;
        
    }
    scoreEl.innerText = `Score: ${correctAns}`; // Update score display
    inputEl.value = ""; // Reset input field
    generateQuestion(); // Generate new question
});

function generateQuestion() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
}
