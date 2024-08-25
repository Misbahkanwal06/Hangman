

'use client';
import React from 'react';

function WordDisplay({ word, guessedLetters }) {

  return (
    <div className="word-display mb-3 mt-4 d-flex justify-content-center">
      {word.split('').map((letter, index) => (
        <span key={index} className=" border-bottom"
          style={{ minWidth: '40px', display: 'inline-block', textAlign: 'center' }}>
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;
