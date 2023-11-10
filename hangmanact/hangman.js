const wordDisplay = document.querySelector(".word-display");

const keyboardDiv = document.querySelector(".keyboard");

const guessesText = document.querySelector(".guesses-text")

const hangmanImage = document.querySelector("hangman-box img")

const playAgainBtn = document.querySelector("play-again")

let currentWord, correctLetters, imageGuesses, wrongGuessCount = 0 , maxGuesses = 6;

let clickedLetter;

let button;

const randomWord = () => {
    // Selecting a random word from the wordList
    const wordList = [
        {
            word: "SPIDERMAN",
            hint: "climbs on walls"
            
        },
        {
            word: "BATMAN",
            hint: "bruce"
        },
        {
            word: "HULK",
            hint: "green man"
        }
    ]
    const clue  = wordList[Math.floor(Math.random() * wordList.length)]
    
    const word = clue.word
    // const hint = clue.hint
    currentWord = word;
   
    console.log(word)
    wordDisplay.innerHTML = word.split(``).map(() => `<li class="letter">_</li>`).join("");
    // hintDisplay.innerHTML = hint
}
// Checking if clickedLetter exists on the currentWord
const initGame = (button , clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter)
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
    )} else {
        // If clicked letter doesn't exist then update the WrongGuessCount and Image
        wrongGuessCount++;
        imageGuesses = document.querySelector("img");
        imageGuesses.src = `images/hangman-${wrongGuessCount}.svg`
        
    }
    button.disabled = true;
    guessesText.innerHTML = `Incorrect Guesses:  ${wrongGuessCount} / ${maxGuesses}`


    if(wrongGuessCount === 6) {
        setTimeout(() => {
        alert("You Lose!")
        location.reload()
        }, 900)
    }

    if(wordDisplay.innerHTML.includes("_") === false) {
        setTimeout(() => {
            alert("You Win!")
            location.reload()
            }, 900)
        
}
}


// Creating Keyboard Buttons and adding Event Listeners

for (i = 97; i <= 122; i++) {
    
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click" , e => initGame(e.target,  button.innerText));
    
}

randomWord();

