Overview:

ChessNotes is a chess training application that enables users to create personalized virtual opponents replicating real players' styles from Chess.com. This tool is designed for tournament preparation, strategic training, and self-improvement by simulating specific opponents' playstyles.

Features:

Personalized AI opponents, data-driven training,Stockfish integration,comfortable interface, Single-Player game

Technology Stack:

Backend- Python, Chess.com API, Kaggle, Gemini AI, Stockfish

Frontend- HTML, CSS, TypeScript, JavaScript


Steps:

Clone the repository

	% git clone https://github.com/SanzharHDXZ/ChessNotes

Install dependencies:

    % npm install

Change it to your Google API:

    //gemini.service.ts:
    private baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
    private apiKey = ' '; // Replace with your actual API key

 Run project

    % ng serve

Usage:

1) Log into your account
2) Enter your nickname in chess.com
3) Open the chat
4) Enjoy the game!

   Full guide of using you can see in https://www.youtube.com/watch?v=-IBRAcVGVZY

Limitations:

-Requires an active internet connection.

-Currently supports only single-player mode.

Contact:

 For questions or contributions, feel free to reach out at serikkhansanzharkz@gmail.com.
