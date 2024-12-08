let timer = 120;
let score = 0;

const countries = [
    {name: "TÜRKİYE", neighbors: ["BULGARİSTAN", "GÜRCİSTAN", "YUNANİSTAN"]},
    {name: "ÇEKYA", neighbors: ["POLONYA", "SLOVAKYA", "ALMANYA"]},
    {name: "KUZEY MAKEDONYA", neighbors: ["ARNAVUTLUK", "BULGARİSTAN", "YUNANİSTAN"]},
    {name: "İSVİÇRE", neighbors: ["ALMANYA", "İTALYA", "FRANSA"]},
    {name: "SLOVAKYA", neighbors: ["MACARİSTAN", "ÇEKYA", "POLONYA"]},
    {name: "SIRBISTAN", neighbors: ["ROMANYA", "BOSNA HERSEK", "KARADAĞ"]},
    {name: "TANZANYA", neighbors: ["UGANDA", "KENYA", "MOZAMBİK"]},
    {name: "PERU", neighbors: ["EKVATOR", "KOLOMBİYA", "BREZİLYA"]},
    {name: "IRAK", neighbors: ["TÜRKİYE", "SURİYE", "İRAN"]},
    
];

const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const countriesElement = document.getElementById('countries');
const submitButton = document.getElementById('submit-btn');
const answerInput = document.getElementById('answer');

let currentCountry = 0;


function startTimer() {
    const countdown = setInterval(function() {
        timerElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdown);
            alert("Your time has expired! Your score: " + score);
            window.location.href = 'index.html';
        }
        timer--;
    }, 1000);
}


function loadQuestion() {
    const country = countries[currentCountry];
    countriesElement.innerHTML = `Countries: ${country.neighbors.join(', ')}`;
}


submitButton.addEventListener('click', function() {
    const userAnswer = answerInput.value.trim().toUpperCase(); 
    const correctAnswer = countries[currentCountry].name;

    if (userAnswer === correctAnswer) {
        score++;
        scoreElement.textContent = "Point: " + score;
        currentCountry++;
        if (currentCountry < countries.length) {
            loadQuestion();
        } else {
            alert("You Won the Game! Your score: " + score);
            window.location.href = 'index.html';
        }
    } else {
        alert("Wrong Answer! You lost the game!");
        window.location.href = 'index.html';
    }
});


window.onload = function() {
    startTimer();
    loadQuestion();
};
