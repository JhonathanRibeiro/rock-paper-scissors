let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "<img src='images/rock-icon.png'>";
    if(letter === "p") return "<img src='images/paper-icon.png'>";
    return "<img src='images/scissors-icon.png'>";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user &nbsp;".fontsize(2);
    const smallCompWord = "comp &nbsp;".fontsize(2); 
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} vence ${convertToWord(computerChoice)}${smallCompWord} . Você venceu!🥇 `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 800);
}

// setTimeout(function() {console.log("hello")}, 3000);

function lose(userChoice, computerChoice) {
    const smallUserWord = "user &nbsp;".fontsize(2);
    const smallCompWord = "comp &nbsp;".fontsize(2);
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde para ${convertToWord(computerChoice)}${smallCompWord} . Você perdeu... 💩`;
     userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 800);
}
function draw(userChoice, computerChoice) {
    const smallUserWord = "user &nbsp;".fontsize(2);
    const smallCompWord = "comp &nbsp;".fontsize(2);
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} é igual a ${convertToWord(computerChoice)}${smallCompWord} . Empate! 🚫`;
     userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 800);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
          break;
        case "rp":
        case "ps":
        case "rs":
            lose(userChoice, computerChoice);
          break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
          break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}
main();