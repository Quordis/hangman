export default function randomWord() {
    fetch('../data/wordlist.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    return 'word';
}