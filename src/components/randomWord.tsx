export default async function randomWord(): Promise<string> {
    let resoult = 'word';
    try {
        const response = await fetch('./wordlist.json');
        const json = await response.json();
        const filtered = json.filter((word: any) => word.length < 10);
        const randomNumber = Math.floor(Math.random() * filtered.length);
        resoult = filtered[randomNumber];
    } catch (err) {
        console.log("Nie udało się załadować danych\n" + err);
    }
    return resoult;
}