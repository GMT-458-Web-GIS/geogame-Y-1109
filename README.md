# INTERCOUNTRY

## **MY GEOGAME LİNK**  
[**https://gmt-458-web-gis.github.io/geogame-Y-1109/**](https://gmt-458-web-gis.github.io/geogame-Y-1109/)

## **Yağız Özkaya - 2200674057**

![Game Logo](https://github.com/GMT-458-Web-GIS/geogame-Y-1109/raw/main/img.png)

---

## **Project Introduction**

**INTERCOUNTRY** is a map-based trivia game designed to test your geography knowledge in an educational and entertaining way. Players aim to find the intersection point of three given countries. Active interaction with the map allows players to enhance their geographic understanding while enjoying an engaging game experience.

In the game, players analyze the boundaries of the three given countries on the map and try to identify the country at their intersection. A wrong guess triggers an error message, and the game continues with a new set of countries. Players have a total of **120 seconds** to make as many correct guesses as possible. The game ends when the time runs out, and the final score is displayed.

---

## **Features**

- **Map Interaction**: Players see the names of three countries and analyze their borders to find the correct country at their intersection.
- **Time Limit**: Players have a total of **120 seconds** to make as many correct guesses as possible.
- **Educational and Entertaining Experience**: The game improves players’ geographic knowledge while providing a fun and challenging experience.

---

## **How to Play**

1. When the game starts, the names of three countries are displayed on the screen.
2. Players must identify the country located at the intersection of these three borders.
3. Once a guess is made, players click the **"Submit Answer"** button.
4. Players aim to score as many points as possible within the total **120-second** time limit.

- **Correct Answer**: If the player guesses correctly, they earn points and move to the next set of countries.
- **Incorrect Answer**: If the answer is incorrect, an error message—**"Wrong answer! Please try again."**—is displayed, and a new set of countries is provided.
- **Time Expiry**: The game ends when the time runs out, and the total score is shown on the screen.

---

## **Technologies Used**

- **HTML**: For structuring the webpage.
- **CSS**: For styling and layout.
- **JavaScript**: For game logic and interactive features.
- **Leaflet.js**: For map visualization and functionality.

---

## **Key Features and Implementations**

### **1. Three Core Event Handlers**

- **Submit Answer Button**: Allows players to submit their guesses. Correct guesses earn points, while incorrect guesses trigger an error message and provide a new set of countries.
- **Map Exploration**: Players can explore the map to better understand geographic regions. The map serves as a static visual aid for the game.
- **Timer**: A global countdown of **120 seconds** starts when the game begins. The game ends when the timer hits zero, and the total score is displayed.

---

### **2. Use of Closures**

- **Time and Score Tracking**: A single global timer is used for the game. Closures are employed to manage the total time (**120 seconds**) and dynamically update the player's total score.
- **Map Support**: The map serves as a static visual aid throughout the game. It does not dynamically update markers with each level.

---

### **3. AI-Assisted Development**

Tools like ChatGPT provided significant support in designing the game and implementing map interactions. Specifically, they assisted in optimizing JavaScript code and refining the game's flow.

---

### **4. DOM Interactions**

- **Message Updates**: Dynamic messages are displayed on the DOM when players submit correct or incorrect answers, guiding them through the game.
- **Map Visualization**: The map is a static component used to help players analyze regions and make educated guesses. It does not display specific markers for each set of countries.

---

### **5. Game Dynamics**

- **Challenge and Fun**: Players analyze boundaries and intersections to find the correct country, making for an educational yet entertaining experience.
- **Excitement and Competition**: Players strive to make as many correct guesses as possible within the **120-second** limit. Each correct guess provides a sense of achievement, while incorrect guesses motivate players to try again.
