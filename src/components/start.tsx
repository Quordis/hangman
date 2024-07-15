import { useRef, useState } from "react";
import randomWord from './randomWord'

export default function Start(props: any) {
    let [page, setPage] = useState<string>('');
    let [gameType, setGameType] = useState<string>('');
    let [inputValue, setInputValue] = useState('');
    const regex = /^[a-zA-Z]+$/;

    function handleClick(e: any) {
        document.getElementsByClassName('background-dark')[0].classList.add('background-dark-active');
        switch (e.target.getAttribute("id")){
            case "btn-startGame":
                setPage("start");
                break;
            case "btn-settings":
                setPage("settings");
                break;
            case "btn-rules":
                setPage("rules");
                break;
            default:
                break;
        }
    }

    function handleClose() {
        document.getElementsByClassName('background-dark')[0].classList.remove('background-dark-active');
    }

    function getRandomWord() {
        randomWord().then((word) => {
            props.sendWordToParent(word)
        }).catch((err) => {
            console.error(err);
        });
    }

    function handleGameType(e: any) {
        switch (e.target.getAttribute('id')) {
            case 'btn-random-word':
                setGameType('random');
                getRandomWord()
                break;
            case 'btn-type-word':
                setGameType('type');
                document.getElementsByClassName('type-container')[0].classList.toggle('active');
                break;
            default:
                break;
        }
    }

    function handleInputChange(e: any) {
        if (e.target.value.length === 0) return setInputValue('');
        if (!regex.test(e.target.value)) return;
        setInputValue(e.target.value)
    }

    function getTypedWord(e: any) {
        e.preventDefault();
        if (inputValue.length >=10) return alert("Length of the word cannot be higher than 10 characters")
        props.sendWordToParent(inputValue);
    }

    return (
        <div className="startContainer">
            <button id="btn-startGame" onClick={handleClick}>Start game</button>
            <button id="btn-settings" onClick={handleClick}><i className='bx bx-cog' id="btn-settings"></i></button>
            <button id="btn-rules" onClick={handleClick}>Rules</button>
            <div className="background-dark">
                <div className="start-window-container">
                    <div id="start-window-close" onClick={handleClose}><i className='bx bx-x'></i></div>
                    {page === "start" &&
                    <div className="start-wrapper">
                        <button id="btn-random-word" onClick={handleGameType}>Random word</button>
                        <button id="btn-type-word" onClick={handleGameType}>Type a word</button>
                        <form className="type-container">
                            <input type="text" id="type" name="type" value={inputValue} onChange={handleInputChange}/>
                            <input type="submit" value="Play" id="btn-word" onClick={getTypedWord}/>
                        </form>
                    </div>}
                    {page === "settings" &&
                    <div className="language-select">
                        <label htmlFor="language">Language</label>
                        <select name="language" id="language">
                            <option value="english">English</option>
                            <option value="polish">Polski</option>
                        </select>
                        <button>Save</button>
                    </div>}
                    {page === "rules" &&
                    <div className="rules-wrapper">
                        <p><strong>The Hangman game</strong> is that you have to guess the word. At the start you are given the length of the word. You can discover more letters by clicking on one given on the keyboard. If this letter is in the word, it is revealed, while if it is not in the word, another hangman element is discovered. If the entire hangman is discovered, unfortunately you have lost. If the entire word is discovered, you have won!</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}