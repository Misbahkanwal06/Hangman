


'use client';
import React from 'react';

function Keyboard({ onLetterClick }) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '380px', margin: 'auto', marginTop: '15px' }}>
      {letters.map((letter) => (
        <button key={letter} onClick={() => onLetterClick(letter)} style={{  width: '40px', padding: '10px 10px', fontSize: '1rem', cursor: 'pointer' }}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
