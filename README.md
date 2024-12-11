# INTERCOUNTRY

## **MY GEOGAME LİNK**  
[**https://gmt-458-web-gis.github.io/geogame-Y-1109/**](https://gmt-458-web-gis.github.io/geogame-Y-1109/)

## **Yağız Özkaya - 2200674057**

![Game Logo](https://github.com/GMT-458-Web-GIS/geogame-Y-1109/raw/main/img.png)

---
## Project Description
**INTERCOUNTRY** is a fun and educational map-based game. The objective of the game is to guess the country that shares borders with the three countries given to the player. Each correct answer earns the player points, and the player can score a maximum of 40 points within 120 seconds. The game ends either when the time runs out or when the player answers incorrectly.

## How to Play?
1. **Starting the Game**: The game begins with the display of the "INTERCOUNTRY" title at the top of the screen. Below this, there are two buttons: "How to Play?" and "Start Game". Players can click the "How to Play?" button to learn the rules of the game or click "Start Game" to begin playing.
2. **Timer**: Once the game starts, a countdown timer of 120 seconds begins.
3. **The Question**: Three neighboring countries will be shown, and the player must guess the country that shares a border with all three.
4. **Options**: The correct country, along with random incorrect options, will be presented as answer choices. For each correct answer, the player earns one point and a new set of countries will be presented.
5. **Time Limit**: If the player correctly answers all questions and completes the game within the time limit, they win. If they answer incorrectly or run out of time, the game ends.

## Game Features
- **Map**: The game uses the Leaflet library to display and manage the map. For each question, the map will focus on the region of the relevant country.
- **Timer**: The player has 120 seconds to answer the questions, with the countdown updating every second.
- **Answer Choices**: Answer options are randomly generated, including one correct answer and multiple incorrect ones.
- **Scoring System**: The player earns one point for each correct answer, and their total score is displayed on the screen.

## Technologies Used
- **HTML**: Used to structure the game pages.
- **CSS**: Used for styling the layout and design of the pages.
- **JavaScript**: Used to implement game logic, the timer, map integration, and user interaction.
- **Leaflet**: A JavaScript library for creating and managing interactive maps.

## Event Handlers Implemented
1. **Timer Start**: The `startTimer()` function initializes the countdown and updates the timer every second. When the timer reaches zero, the game ends.
2. **Answer Validation**: The `handleAnswer()` function checks whether the player's selected answer is correct. If correct, the score increases and a new question is loaded. If incorrect, the game ends.
3. **Generating Options**: The `generateOptions()` function creates a list of answer choices, including the correct answer and several random incorrect countries.

## Benefits of Using Closures
Closures are utilized in the project, especially in the `startTimer()` function and `handleAnswer()` function. The `setInterval` function interacts with external variables, such as `timerElement` to update the timer display and manages the countdown. These closures help ensure that the timer and game logic operate smoothly and correctly.

## AI Learning (ChatGPT, Gemini, etc.)
AI technologies like ChatGPT assisted in learning JavaScript functions, DOM manipulation, and optimizing the game logic. AI guided the creation of essential game functions and ensured that the code was efficient and functional. These interactions played a significant role in improving the code and enhancing the game's functionality.

AI Interaction URL: (https://chatgpt.com/share/675a1dc3-b4d8-8011-b89a-ec9ffcb46cd4)

## DOM Interaction
- **Map Updates**: The map view is updated for each new question, focusing on the region of the relevant country using the `map.setView()` function.
- **Element Manipulation**: Game elements, such as the options container (`optionsContainer.innerHTML`) and score display (`scoreElement.textContent`), are dynamically updated as the game progresses.
- **Event Listeners**: Event listeners are added to buttons, enabling them to trigger specific functions based on user interactions, such as selecting an answer.

## Game Interaction and Fun Factor
**INTERCOUNTRY** provides an engaging user experience with its map-based interface, while the time limit adds excitement and challenge. The random presentation of questions and answer choices ensures that each game session is unique. The game not only offers fun but also helps players improve their geographical knowledge.

The time constraint and the pressure to answer correctly create an exciting atmosphere. Each correct answer motivates the player to keep going and provides a sense of accomplishment. The scoring system tracks progress, creating a competitive edge and making the game more enjoyable.

---

