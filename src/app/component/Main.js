

'use client';
import React, { useState, useEffect } from 'react';
import WordDisplay from './WordDisplay';
import Keyboard from './Keyboard';
import ResetButton from './ResetButton';
import Modal from './Modal';

function Game() {

  const [word, setWord] = useState('');
  const [count, setCount] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  // console.log("guessedLetters",guessedLetters);

  const wordList = ["hangman", "game", "history", "weekend", "happy"];
  useEffect(() => {
    const getRandomWord = () => {
      const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      setWord(randomWord);
    };
    getRandomWord();
  }, []);

  const handleLetterClick = (letter) => {
    if (word.includes(letter.toLowerCase())) {
      if (!guessedLetters.includes(letter.toLowerCase())) {
        // setGuessedLetters( (prev) => [...prev, letter.toLowerCase()] );
        // console.log("guessedLetters", guessedLetters);
        const updatedGuessedLetters = [...guessedLetters, letter.toLowerCase()];
        setGuessedLetters(updatedGuessedLetters);
        console.log("guessedLetters", updatedGuessedLetters);

        const uniqueLettersInWord = [...new Set(word.split(''))];
        const guessedAllLetters = uniqueLettersInWord.every((letter) =>
          updatedGuessedLetters.includes(letter)
        );
        if (guessedAllLetters) {
          setInterval(() => {
            setShowModal(true);
            setMessage("Congratulations");
          }, 1000)
        }
      }
    } else {
      if (count < 6) {
        setCount((prevCount) => prevCount + 1);
      }
    }
  };

  useEffect(() => {
    if (count === 6) {
      setShowModal(true)
      setMessage("You lost! Try again");
    }
  }, [count]);


  const handleReset = () => {
    setCount(0);
    setGuessedLetters([]);
    setShowModal(false);
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWord(randomWord);
  };

  return (
    showModal ? (
      <Modal show={showModal} message={message} />
    ) : (
      <div className="d-flex flex-column align-items-center ">
        <h1>Hangman</h1>
        <WordDisplay word={word} guessedLetters={guessedLetters} />
        <h4 className="">Incorrect guesses: {count} / 6</h4>
        <Keyboard onLetterClick={handleLetterClick} />
        <ResetButton onReset={handleReset} />
      </div>
    )


  );
}

export default Game;




