const map = L.map('map').setView([48.858844, 2.294351], 5); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const countries = [
    { name: "TURKEY", neighbors: ["BULGARIA", "GEORGIA", "GREECE"] },
    { name: "CZECHIA", neighbors: ["POLAND", "SLOVAKIA", "GERMANY"] },
    { name: "NORTH MACEDONIA", neighbors: ["ALBANIA", "BULGARIA", "GREECE"] },
    { name: "SWITZERLAND", neighbors: ["GERMANY", "ITALY", "FRANCE"] },
    { name: "SLOVAKIA", neighbors: ["HUNGARY", "CZECHIA", "POLAND"] },
    { name: "SERBIA", neighbors: ["ROMANIA", "BOSNIA AND HERZEGOVINA", "MONTENEGRO"] },
    { name: "TANZANIA", neighbors: ["UGANDA", "KENYA", "MOZAMBIQUE"] },
    { name: "PERU", neighbors: ["ECUADOR", "COLOMBIA", "BRAZIL"] },
    { name: "IRAQ", neighbors: ["TURKEY", "SYRIA", "IRAN"] },
];

let timer = 120;
let score = 0;
let currentCountryIndex = 0;
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const countriesElement = document.getElementById('countries');
const optionsContainer = document.getElementById('options');


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
    const country = countries[currentCountryIndex];
    countriesElement.innerHTML = `Countries: ${country.neighbors.join(', ')}`;

    const countryCoordinates = {
        "TURKEY": [39.925533, 32.866287],
        "CZECHIA": [49.817492, 15.472962],
        "NORTH MACEDONIA": [41.608635, 21.745275],
        "SWITZERLAND": [46.818188, 8.227512],
        "SLOVAKIA": [48.669026, 19.699024],
        "SERBIA": [44.016521, 21.005859],
        "TANZANIA": [-6.369028, 34.888822],
        "PERU": [-9.189967, -75.015152],
        "IRAQ": [33.223191, 43.679291]
    };

    const coords = countryCoordinates[country.name];
    if (coords) {
        map.setView(coords, 6); 
    }

    
    generateOptions(country.name);
}

function generateOptions(correctAnswer) {
    optionsContainer.innerHTML = '';

    const options = [correctAnswer];

    
    while (options.length < 3) {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)].name;
        if (!options.includes(randomCountry)) {
            options.push(randomCountry);
        }
    }

    
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => handleAnswer(option, correctAnswer));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
        scoreElement.textContent = "Point: " + score;
        currentCountryIndex++;
        if (currentCountryIndex < countries.length) {
            loadQuestion();
        } else {
            alert("You Won the Game! Your score: " + score);
            window.location.href = 'index.html';
        }
    } else {
        alert("Wrong Answer! Your score: " + score);
        window.location.href = 'index.html';
    }
}

window.onload = function() {
    startTimer();
    loadQuestion();
};
