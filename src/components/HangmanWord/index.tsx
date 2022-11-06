import React from 'react';
import './HangmanWord.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  return (
    <div className="hangmanWordContainer">
      {wordToGuess.split('').map((letter, index) => {
        return (
          <span key={index} className="word">
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? 'visible'
                  : 'hidden',
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default HangmanWord;
