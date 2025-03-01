# Battleship Game

This is my Battleship game project. Just a little interactive game built with JavaScript where you can play against a computer opponent. (It's not very smart, but it will keep you busy for 5 mins). 

## What This Project Does

This Battleship game lets you:
- **Place your ships:** Arrange your ships on a 10x10 grid by clicking to move them or flipping their orientation with a button.
- **Attack the computer:** Click on the computer’s board cells to try sinking its ships.
- **Watch the computer attack:** See the computer randomly attack your board in response. (Yes...randomly...)
- **Restart the game:** Start fresh at any time, either during placement or after winning/losing.
- **Extra turns:** Earn another turn if you or the computer scores a hit, adding strategy to the game.
- **Visual feedback:** Get visual cues—red for hits, blue for misses, and grey for ship positions (when revealed).
- **Custom cursors:** Enjoy a pointer cursor during setup (placement) and a default cursor during gameplay.


## What I Learned

Working on this project taught me a lot as a beginner:

- **JavaScript Classes:**  
  Organizing game logic with classes like `GameBoard`, `Ship`, and `Player`.
- **Module Separation:**  
  Separating concerns by handling UI in `domController.js` and game logic in `gameLogic.js`.
- **DOM Manipulation:**  
  Creating and updating game boards and buttons dynamically.
- **Event Handling:**  
  Managing click events and game states (e.g., `"placement"`, `"playing"`, or `"menu"`).
- **Version Control:**  
  Using Git and GitHub for version control and sharing my project.

## Limitations

There are a few things this project can’t do yet:

- **Random AI:**  
  The computer’s AI is completely random—it picks attack spots with no strategy. I’d love to make it smarter someday (for example, targeting nearby cells after a hit).
- **No Game Saving:**  
  You can’t save your game progress or load previous games, so you always start fresh.
- **Lack of Effects:**  
  There are no sound effects or animations yet, which could make the game more engaging.
- **Single-Player Only:**  
  The game currently only supports playing against the computer; multiplayer mode isn’t available yet.

## How to Try the Game Yourself

You can play this game by cloning the repository and running it locally. Check out the live demo [here](#) *https://lauritzcode.github.io/Simple-Battleship-Game*.

## Getting Started

1. **Clone this repository:**
   ```bash
   git clone https://github.com/LauritzCode/Simple-Battleship-Game
   ```
2. **Navigate to the project folder:**
   ```bash
   cd battleship
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the game:**
   ```bash
   npm start
   ```
   Or simply open `index.html` in a browser if no build step is required.

I’m still learning, so I’d love feedback or suggestions! If you want to contribute or help improve the project, feel free to open an issue or submit a pull request!

---
