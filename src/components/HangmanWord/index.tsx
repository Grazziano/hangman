import React from 'react';
import './HangmanWord.css';

function HangmanWord() {
  const word = 'test';
  const guessedLetters = ['e'];

  return (
    <div className="hangmanWordContainer">
      {word.split('').map((letter, index) => {
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
