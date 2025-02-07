<p align="center">   <img src="https://github.com/user-attachments/assets/f0e72934-53b6-4df7-8ef1-32d57fe50f21" width="100" height="100"> </p>

# ChessNotes

[![Star](https://img.shields.io/github/stars/SanzharHDXZ/ChessNotes.svg?logo=github&style=flat-square)](https://github.com/SanzharHDXZ/ChessNotes)&nbsp;
[![Fork](https://img.shields.io/github/forks/SanzharHDXZ/ChessNotes.svg?logo=github&style=flat-square)](https://github.com/SanzharHDXZ/ChessNotes)&nbsp;
[![Watch](https://img.shields.io/github/watchers/SanzharHDXZ/ChessNotes.svg?logo=github&style=flat-square)](https://github.com/SanzharHDXZ/ChessNotes)&nbsp;

ChessNotes is a chess training application that enables users to create personalized virtual opponents replicating real players' styles from Chess.com. This tool is designed for tournament preparation, strategic training, and self-improvement by simulating specific opponents' playstyles.

[Kaggle Notebook: Setting Up Chess.com Bot Agent using Gemini AI](https://www.kaggle.com/code/sanzh08/chess-user-bot-chess-com-gemini-ai-839dff)

## Features
1. **Personalized AI Opponents** – Train against AI mimicking real Chess.com players.
2. **Data-Driven Training** – Analyze past games to improve your play.
3. **Stockfish Integration** – Leverage the strongest chess engine for training.
4. **Comfortable Interface** – User-friendly design for a smooth experience.
5. **Single-Player Mode** – Play against AI in a solo training environment.

## Technology Stack

1. **Backend:** Python, Chess.com API, Kaggle, Gemini AI, Stockfish
2. **Frontend:** HTML, CSS, TypeScript, JavaScript

## Screenshots

<img src="https://github.com/user-attachments/assets/72fe9518-de29-4486-a2b5-04bcef019f0d" width="498" height="280">
<img src="https://github.com/user-attachments/assets/6caa0dfd-e4e3-412e-a010-cf7fa4f893bb" width="498" height="280">

---

## Installation & Setup

### Clone the Repository
```sh
 git clone https://github.com/SanzharHDXZ/ChessNotes
```

### Install Dependencies
```sh
 npm install
```

### Configure Google API
Edit `gemini.service.ts`:
```typescript
private baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
private apiKey = ' '; // Replace with your actual API key
```

### Run the Project
```sh
 ng serve
```

---

## Usage
1. Log into your account.
2. Enter your Chess.com nickname.
3. Open the chat.
4. Enjoy the game!

For a full guide, check out the [video tutorial](https://www.youtube.com/watch?v=-IBRAcVGVZY).

---

## Limitations
- Requires an active internet connection.
- Currently supports only single-player mode.

---

## Contact
For questions or contributions, feel free to reach out at **serikkhansanzharkz@gmail.com**.

