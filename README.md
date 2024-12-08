# INTERCOUNTRY

INTERCOUNTRY is a fun and educational map-based guessing game focused on geographic knowledge and map interaction. Players attempt to find the intersection point of three given countries. The game provides active interaction with the map and tests players' knowledge of geography.

## Project Introduction

INTERCOUNTRY is a map-based game designed to educate players about geography. In this game, players must guess the correct country at the intersection point of the borders of three given countries. These countries are marked on the map as clues, and players must analyze their borders to find the correct country. If a player makes an incorrect guess, an error message is shown, and the game restarts.

This game is not only fun but also educational, encouraging users to interact with the map and improve their geography knowledge.

## Features

- **Map Interaction**: Players will see the names of three countries marked on the map. Players will attempt to guess the correct country at the intersection of these three countries by interacting with the map.
- **Timer**: A set time limit is given for each guess, and players must find the correct answer within that time.
- **Complex Level Structure**: The difficulty level increases as the borders of the given countries become more complex, which keeps players engaged and attentive throughout the game.
- **Dynamic Map**: With each level, the map and the given countries are dynamically updated.

## How to Play?

When players start the game, they will see the names of three different countries, which are marked on the map. The player must attempt to guess the correct country at the intersection of these three countries. After entering their guess, they click the "Submit Answer" button to submit their answer.

- **Correct Answer**: If the player guesses the correct country, they move on to the next level.
- **Incorrect Answer**: If the answer is wrong, the message "Incorrect answer! Please try again." will appear.
- **Timer**: Each level has a timer, and players must submit their answer before time runs out. When the time expires, a "Time's up!" message appears.

## Technologies

This project uses the following technologies:

- **HTML**: For the structure and content of the page.
- **CSS**: For styling the page.
- **JavaScript**: For game logic and interactive features.
- **Leaflet.js**: For map interaction and placing markers on the map.

## Libraries Used

- **Leaflet.js**: A popular open-source library for creating interactive maps. It is used to implement features such as markers, click events, and zooming on the map.
  
- **HTML5, CSS3**: These technologies provide the basic building blocks for the webpage and the visual components of the game.

## Features and Implementations

### 1. **Three Event Handlers Implemented in the Repo**

In this project, I used three main event handlers to facilitate player interaction:

- **Submit Answer Button**: When the player enters their answer and clicks the "Submit Answer" button, JavaScript is used to check the answer. If the answer is correct, the player progresses to the next level. If the answer is incorrect, an error message is displayed.

- **Map Exploration**: Players can explore the map by interacting with it. This allows them to observe the regions where the correct countries are located. The map's click events make the process of identifying the correct country more interactive.

- **Timer Expiry**: Each level includes a timer, which gives the player a limited amount of time to submit their answer. When the timer runs out, the message "Time's up!" is shown, and the player moves on to the next level.

### 2. **How Closures (Scope) Were Used in the Project**

During the development of the project, I used closures to make certain functions more dynamic:

- **Timer and Score Tracking**: For each game level, a timer is started, and this timer uses closures to hold specific variables for each level. This allows the game to manage the time and score data separately for each level.

- **Map Interaction and Dynamic Displays**: The map is shown interactively with the three countries for each level. The countries are displayed on the map as clues. Using JavaScript, the map is dynamically updated for each level, and closures are used to manage the display and interaction logic. As the player progresses through the game, the map and clues are updated accordingly.

### 3. **AI Interaction (ChatGPT, Gemini, etc.)**

I learned a lot from AI, particularly from ChatGPT, about game design and map interaction. ChatGPT helped me understand how to add interactive elements on the map, dynamically show user feedback, and use JavaScript to handle map marker placement.

**AI Interaction Link**: [ChatGPT Interaction](https://chatgpt.com/share/6755fdac-6858-8011-b639-ea9d1eed1e8e)

### 4. **DOM Interaction**

In my project, I heavily interacted with the DOM to provide user feedback and manipulate visual markers on the map.

- **Message Updates**: As players provide correct or incorrect answers, I dynamically update the message element in the DOM. These messages guide the player and prepare them for the next level of the game.
  
- **Map Markers**: For each level, the three countries are shown as clues on the map. This is done by manipulating the DOM elements representing the map using the Leaflet.js library.

### 5. **Game Interactivity / Complexity / Fun**

- **Interaction and Fun Gameplay**: Players try to guess the correct country at the intersection of the three countries. The map provides visual information about the countries, and the process of making the correct guess encourages players to actively review the map. This continuous interaction keeps the players engaged and requires them to be more attentive.

- **Complexity**: As the game progresses, the difficulty level increases, with the countries' borders becoming more complex. This challenges players' attention and knowledge as they advance through the game.
  
- **Fun**: Every correct guess rewards the player, while incorrect answers encourage them to try again. The time limit adds excitement to the gameplay, keeping it engaging and dynamic.
