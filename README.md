# Country Hunt

## Game Description
"Country Hunt" is an interactive quiz game that provides users with a random geographical clue, allowing them to guess the correct country. Players will try to identify which country is represented based on the given hint. Correct guesses will earn points.

## Requirements
- A system to present random clues to users.
- A mechanism to check user guesses.
- A user interface that provides scoring and feedback.
- Mobile-responsive design.

## Technologies Used
- **HTML**: For creating the game interface and structure.
- **CSS**: For styling and designing the game.
- **JavaScript**: For game logic, user interaction, and scoring.
- **Leaflet**: For map-based interactions and visualizing geographical clues.

## Game Flow
1. When the game starts, a random clue is displayed to the user.
2. The user attempts to guess the correct country based on the clue.
3. The user types their guess into the input field and clicks the "Guess" button.
4. If the guess is correct, points are awarded; if incorrect, the correct answer is displayed.
5. For each correct guess, a new clue is provided, and the game continues.

## Game Interface
- **Clue Area**: Displays the geographical information given to the user.
- **Input Field**: For the user to enter their guess.
- **Score Display**: Shows the user's total score.



## Main Screen Design

### 1. Title Area
- **Features**:
  - The game name will be displayed in a large, bold font, centered on the screen.
  - The background color may use a light shadow or gradient.
  - Color palette: Light blue or green tones.
- **Visual**:
  - **Title**: "Country Hunt"
  - **Subtitle**: "Can you guess the country based on the clue?"

### 2. Clue Area
- **Features**:
  - This area will display the geographical clue given to the user.
  - The text box should be large enough for easy readability.
  - It will be highlighted with a light color tone (e.g., light green).
- **Visual**:
  - **Clue Text**: "Your clue will appear here!"

### 3. Map Area
- **Features**:
  - An area integrated with the Leaflet library for a map display.
  - The map will help users visually understand the geographical clues given.
  - The map size should balance well with other components (e.g., height of 300px).
- **Visual**:
  - The map will initially show a general view of the world.

### 4. Input Area
- **Features**:
  - A wide text box for users to enter their guesses.
  - Designed to provide sufficient space around the input field for better user experience.
- **Visual**:
  - **Input Box**: with placeholder text "Enter your guess..."

### 5. Guess Button
- **Features**:
  - A button for users to submit their guesses.
  - The button color should be eye-catching (e.g., blue).
  - The color will change on hover for visual feedback.
- **Visual**:
  - **Button**: "Guess"

### 6. Score Display
- **Features**:
  - An area that displays the user's total score.
  - The score display should be clear and quick to inform the user of their current status.
- **Visual**:
  - "Your Score: 0"

### 7. Start Button
- **Features**:
  - A large and prominent button to start the game.
  - This button should be immediately visible at the beginning of the game.
- **Visual**:
  - **Button**: "Start Game" with a green background.

## Design Flow
1. **Start**: When the user clicks the "Start Game" button, the game flow will begin.
2. **Clue Display**: A geographical clue will be shown in the clue area when the game starts.
3. **Map Interaction**: The Leaflet map will allow users to visualize geographical locations related to the clue.
4. **Guess and Score**: After entering their guess, the user can click the "Guess" button to potentially earn points.


------------------------------------------------------
|                     Country Hunt                     |
|          Can you guess the country based on the clue?          |
------------------------------------------------------


------------------------------------------------------
|                  Your clue will appear here!       |
------------------------------------------------------

------------------------------------------------------
|                     [ Leaflet Map ]               |
------------------------------------------------------

------------------------------------------------------
| [ Enter your guess...        ] [    Guess   ]     |
------------------------------------------------------

------------------------------------------------------
|               Your Score: 0                         |
------------------------------------------------------

------------------------------------------------------
|                       [ Start Game ]                |
------------------------------------------------------

