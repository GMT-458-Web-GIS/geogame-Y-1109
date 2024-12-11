# INTERCOUNTRY

## **MY GEOGAME LİNK**  
[**https://gmt-458-web-gis.github.io/geogame-Y-1109/**](https://gmt-458-web-gis.github.io/geogame-Y-1109/)

## **Yağız Özkaya - 2200674057**

![Game Logo](https://github.com/GMT-458-Web-GIS/geogame-Y-1109/raw/main/img.png)

---

## Project Description
**INTERCOUNTRY** is a fun and educational map-based game. The objective of the game is to identify the correct country that shares borders with three neighboring countries presented to the player. Each correct answer earns points, and the player can score a maximum of 40 points within 120 seconds. The game ends either when the player runs out of time or provides an incorrect answer.

## How to Play
1. **Start**: The game begins with two buttons: "How to Play?" and "Start Game."
2. **Timer**: A 120-second countdown starts as soon as the game begins.
3. **Question**: Three neighboring countries are shown, and the player must guess the country that shares borders with all three of them.
4. **Options**: Randomly generated answer choices are provided. A point is awarded for each correct answer, and a new set of countries will appear.
5. **Time Limit**: If all questions are answered correctly before time runs out, the player wins. If the player answers incorrectly or time runs out, the game ends.

## Game Features
- **Map**: The game utilizes the Leaflet library to display a map, focusing on the relevant region for each question.
- **Timer**: A 120-second timer counts down during the game.
- **Options**: Answer choices are randomly generated, mixing correct and incorrect countries.
- **Scoring System**: The player earns 1 point for each correct answer, with the total score displayed on the screen.

## Technologies Used
- **HTML**: For the page structure.
- **CSS**: For styling and page aesthetics.
- **JavaScript**: For game logic, timer, map integration, and user interaction.
- **Leaflet**: A library used for creating and managing the map.

## Event Handlers Implemented
1. **Timer Start**: The `startTimer()` function initializes and updates the timer every second. When the timer reaches zero, the game ends.
2. **Answer Handling**: The `handleAnswer()` function checks the player's selected answer. If it's correct, the score increases, and the next question is loaded. If incorrect, the game ends.
3. **Option Generation**: The `generateOptions()` function creates random answer choices, ensuring that the correct country is included and the options are shuffled.

## Benefits of Closures in the Project
Closures are used in the project, particularly in the timer function (`startTimer()`) and the answer handling function. The `setInterval` function, which is used for the timer, interacts with external variables such as `timerElement` to update the time display dynamically. This closure allows for the proper functioning of the timer and ensures the game logic operates smoothly.

## Learnings from AI (ChatGPT, Gemini, etc.)
Interactions with AI technologies, especially ChatGPT, were helpful in understanding JavaScript functions and DOM manipulation. AI provided guidance on optimizing game logic, managing events, and solving technical issues related to the implementation. These interactions helped in writing more efficient and functional code.

AI Interaction URL: [[ChatGPT Interaction](https://chat.openai.com)](https://chatgpt.com/share/675a1dc3-b4d8-8011-b89a-ec9ffcb46cd4)

## Interaction with the DOM
- **Map Updates**: The map is centered on a specific region based on the current question using the `map.setView()` function.
- **Element Manipulation**: The game elements, such as the options container (`optionsContainer.innerHTML`) and score display (`scoreElement.textContent`), are dynamically updated as the game progresses.
- **Event Listeners**: Event listeners are added to buttons using `addEventListener()` to capture user input and trigger functions when the player selects an answer.

## Game Interactivity and Fun
**INTERCOUNTRY** provides an interactive and engaging experience by incorporating a map-based interface with real-time player input. The time-limited nature of the game keeps players on their toes, while the randomized answer choices create a fresh experience with each game session. The game is not only fun but also educational, providing geographical knowledge as players learn about neighboring countries and borders.

The combination of strategic thinking, geography knowledge, and time pressure makes the game both challenging and enjoyable. With each correct answer, players are motivated to continue, and the score system adds a competitive element to the game.

