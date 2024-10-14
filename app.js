console.log("Hello, World!")

ourWords = [
  { word: "beach", hint: "A place you relax in" },
  { word: "booth", hint: "A place to show your products in" },
  { word: "fruit", hint: "Something Sweet & Natural" },
  { word: "apple", hint: "Something Keeps the doctor Away!" },
]
// Constants

// Variables (state)

let board
let inputWord
let correctAns
let turn
let winner
let lose
let row
let rowIdx
let winCount
let loseCount
let giveHint

let winSound = new Audio("winaudio.mp3")

//Cached Element References

const enterButton = document.querySelector(".enter")

const messageEl = document.querySelector(".message")

const wordInput = document.querySelector("#wordEntry")

const squareEl = document.querySelectorAll(".square")

const rowOne = document.querySelectorAll(".row1")

const rowTwo = document.querySelectorAll(".row2")

const rowThree = document.querySelectorAll(".row3")

const rowFour = document.querySelectorAll(".row4")

const rowFive = document.querySelectorAll(".row5")

const rowSix = document.querySelectorAll(".row6")

//Functions

const init = () => {
  board = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  winner = false
  lose = false
  turn = 0
  row = 0
  chooseCorrectAns()
}

const enterInput = () => {
  //inputWord = wordInput.value
  if (wordInput.value.length < 5) {
    alert("You have Chose a word with letters less than 5")
    inputWord = ""
  } else if (wordInput.value.length > 5) {
    alert("You have to choose a 5 letter word")
    inputWord = ""
  } else if (wordInput.value.length === 5) {
    inputWord = wordInput.value
  }
}

const updateBox = () => {
  if (turn === 0) {
    for (i = 0; i < inputWord.length; i++) {
      rowOne[i].textContent = inputWord[i]
    }
  } else if (turn === 1) {
    for (i = 0; i < inputWord.length; i++) {
      rowTwo[i].textContent = inputWord[i]
    }
  } else if (turn === 2) {
    for (i = 0; i < inputWord.length; i++) {
      rowThree[i].textContent = inputWord[i]
    }
  } else if (turn === 3) {
    for (i = 0; i < inputWord.length; i++) {
      rowFour[i].textContent = inputWord[i]
    }
  } else if (turn === 4) {
    for (i = 0; i < inputWord.length; i++) {
      rowFive[i].textContent = inputWord[i]
    }
  } else if (turn === 5) {
    for (i = 0; i < inputWord.length; i++) {
      rowSix[i].textContent = inputWord[i]
    }
  }
  turn++
  row++
  //inputWord = ""
}

const updateMessage = () => {}

const chooseCorrectAns = () => {
  const randomIndex = Math.floor(Math.random() * ourWords.length)
  correctAns = ourWords[randomIndex].word
  giveHint = ourWords[randomIndex].hint
}

const checkCorrectCell = () => {
  for (i = 0; i < 5; i++) {
    if (inputWord === correctAns) {
      winner = true
      winSound.play()
    } else {
      winner = false
      if (turn > 5) {
        lose = true
      }
    }
  }
}

const provideHint = () => {
  if (turn >= 4) {
    messageEl.textContent = `Hint: ${giveHint}`
  }
}

const rowIdentifier = () => {
  if (row === 0) {
    rowIdx = rowOne
  } else if (row === 1) {
    rowIdx = rowTwo
  } else if (row === 2) {
    rowIdx = rowThree
  } else if (row === 3) {
    rowIdx = rowFour
  } else if (row === 4) {
    rowIdx = rowFive
  } else if (row === 5) {
    rowIdx = rowSix
  }
}

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
          break
        }
      } else {
        console.log("letter is not right")
        rowIdx[i].style.backgroundColor = "grey"
      }
    }
  }
}

const checkForWin = () => {
  if (winner === true) {
    alert("You Have Won!")
    winCounter++
  } else if (lose === true) alert("You Have Lost")
  loseCount++
}

const render = () => {
  updateBox()
  updateMessage()
}

const handleClick = (event) => {
  enterInput()
  rowIdentifier()
  if (inputWord.length === 5) {
    render()
    evaluateInput()
    checkCorrectCell()
  }
  checkForWin()
  provideHint()
}

init()

// Event Listeners

enterButton.addEventListener("click", handleClick)
