# Wordle

**Wordle** is a game were you have to guess a 5-letter word within 6 trials. with each guess you'll have indicators to help you come close to the right words. With each Guess the squares will change their color as follows:

- _Green square_ means that the letter is in the word and in the right place.
- _Yellow square_ means that the letter is in the word but in the wrong place.
- _Grey square_ means that your letter is not in the word.

**Wordle** became a global phenomenon in web game since it launch in Oct 2021, During 2023, Wordle was played 4.8 billion times

here is a link to my version of [Wordle](https://leoloay.github.io/wordle/)

## Planning Stage

During the planning stage I have included the **user stories** and the **Pseudocode** to plan the game

### User Stories:

- As a user, I want to see a landing Page thad explains the game Briefly.

- As a user, I want a clear way to interact with the game, so I can Know what options I want have.

- As A user, I want to look at the word I will submit Prior to submission.

- As A user, I want to look at the feedback to let me Know if I am at winning or losing

- As a user, I want to clear the message to let me know if I won or lost and keep the score

- As A user, I want an option to play another round reset our Game.

### Pseudocode:

- Define variables tu track the game: Score, Mychoice, theanswer, Result and Message

> - Define the required Constants
> - There are are 6 choices Times
> - There shall be a reference to choose from to choose from Choose or find the right answer.

> - Handle the length of the game (6 times)
> - Handle How the game is processing
> - Handle comparing the right answer to the answer we have
> - Handle Showing of a message wot wot winning or losing, a nice fact about the right answer is.
> - Handle Buttons to start over or reset the game

## Methodology

For HTML and CSS the use was almost basic, **_flexbox_** with classes were defined to create our board, buttons.

for JavaScript however the main variables were initiated as follows:

```
let userName = ""
let board
let inputWord
let correctAns
let turn
let winner
let lose
let row
let rowIdx
let winCount = 0
let loseCount = 0
let giveHint
```

There were also many cached elements that was created each to service a purpose where the functions will be used.

but overall and I believe the main functionality that was deployed into JS was the one for evaluating the letters were I have used to for loops inside each other each for an input give/chosen and then compare them one by one to check if there are in the right place. here is a snippet of the code:

```
const evaluateInput = () => {
  for (i = 0; i < inputWord.length; i++) {
    for (j = 0; j < correctAns.length; j++) {
      console.log("******************", inputWord[i])
      console.log("******************", correctAns[j])

      if (inputWord[i] === correctAns[j]) {
        if (i === j) {
          console.log("letter is in the right and in the correct cell")
          rowIdx[i].style.backgroundColor = "green"
          break
        } else if (i !== j) {
          console.log("letter is in the right but in the wrong cell")
          rowIdx[i].style.backgroundColor = "gold"
          // break
        }
      } else {
        if (
          rowIdx[i].style.backgroundColor === "gold" ||
          rowIdx[i].style.backgroundColor === "green"
        ) {
          continue
        }
        console.log("letter is not right")
        rowIdx[i].style.backgroundColor = "grey"
      }
    }
  }
}
```

also, to choose a word, I have created an array in another file (data.js) where it have a list of over 200 words to choose from, which I have worked on few of the first elements and then the rest was generated with the help of an AI tool.

## Extra steps

- I have included some extra futures such as resetting the game, playing sounds if win or lose, counting score.

here is the snippet of the code for adding sounds:

```
let winSound = new Audio("winaudio.mp3")
let loseSound = new Audio("loseaudio.mp3")
```
