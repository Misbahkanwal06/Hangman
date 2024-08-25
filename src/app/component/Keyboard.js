


'use client';
import React from 'react';

function Keyboard({ onLetterClick }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '300px', margin: 'auto', marginTop: '5px' }}>
      {letters.map((letter) => (
        <button key={letter} onClick={() => onLetterClick(letter)} style={{ padding: '10px 15px', fontSize: '1rem', cursor: 'pointer' }}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
