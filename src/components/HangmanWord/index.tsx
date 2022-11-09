import React from 'react';
import './HangmanWord.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="hangmanWordContainer">
      {wordToGuess.split('').map((letter, index) => {
        return (
          <span key={index} className="word">
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? 'visible'
                    : 'hidden',
                color:
                  !guessedLetters.includes(letter) && reveal ? '#FF1B1C' : 'black',
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
