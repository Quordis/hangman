import React, { useEffect, useState } from 'react';
import './App.css';
import Hangman from './components/hangman'
import WordToGuess from './components/wordToGuess';
import Keyboard from './components/keyboard';
import Start from './components/start';

function App() {
  let [page, setPage] = useState('start')
  let [word, setWord] = useState<string>('')

  function handleWordFromChild(data: string) {
    setWord(data);
  }

  useEffect(() => {
    if (word === '') return;
    setPage('game');
    guessedRight = 0;
    guessedWrong = 0;
    document.querySelectorAll('.human').forEach((part) => {
      part.classList.remove('guessedWrong');
    })
  }, [word])

    let wordToArray: Array<any> = word.split('').map((letter, key) => {
        return (<div className="letterToGuessContainer">
            <div className="letterToGuess" id={'letter' + key}>{letter.toUpperCase()}</div>
            {(letter !== " " && <div className="letterBottom"></div>)}
        </div> )
    })

  let clickedLetter: string[] = [];

    function handleClick(e: any) {
        if (e.target.classList.contains('disabled')) return;

        clickedLetter.push(e.target.innerText);
        e.target.classList.add('disabled');
        if (word.toUpperCase().includes(e.target.innerText)) {
          for (let i = 0; i < word.length; i++) {
            if (document.getElementById(`letter${i}`)?.innerHTML === e.target.innerText) {
              document.getElementById(`letter${i}`)?.classList.add('guessed');
              guessedRight++;
            }
          }

          if (guessedRight === word.length) {
            document.querySelectorAll('.letter').forEach(letter => {
              letter.classList.add('disabled');
            })
            setPage('winLose')
          }
        }
        else {
          if (guessedWrong === 5) {
            document.querySelectorAll('.letter').forEach(letter => {
              letter.classList.add('disabled');
            })
            document.querySelectorAll('.letterToGuess').forEach(letter => {
              if (!letter.classList.contains('guessed')) {
                letter.classList.add('not-guessed')
              }
            })
            document.getElementById('men' + guessedWrong)?.classList.add('guessedWrong');
            setPage('winLose')
            return;
          }
          document.getElementById('men' + guessedWrong)?.classList.add('guessedWrong');
          guessedWrong++;
        }
    }

    function handlePlayAgain() {
      setWord('')
      setPage('start');
    }

    let guessedWrong: number = 0;
    let guessedRight: number = 0;

  return (
    <div className="App">
      <nav><h1>Hangman</h1></nav>
      <Hangman page={page}/>
      {(page === "game" || page === "winLose") && <WordToGuess word={wordToArray}/>}
      {page === "winLose" && <button onClick={handlePlayAgain} id="btn-play-again">Play Again</button>}
      {page === "game" && <Keyboard handleClick={handleClick}/>}
      {page === "start" && <Start sendWordToParent={handleWordFromChild}/>}
    </div>
  );
}

export default App;
