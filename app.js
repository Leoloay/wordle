console.log("Hello, World!")

ourWord = [
  { word: "Beach", Hint: "A place you relax in" },
  { word: "Booth", Hint: "A place to show your products in" },
  { word: "Fruit", Hint: "Something Sweet & Natural" },
]
// Constants

// Variables (state)

let inputWord
let correctAns
let winner
let lose

//Cached Element References

const enterButton = document.querySelector(".enter")

const messageEl = document.querySelector(".message")

const wordInput = document.querySelector("#wordEntry")

//Functions

const enterInput = () => {
  inputWord = wordInput.value
}

const handleClick = (event) => {
  enterInput()
}

// Event Listeners

enterButton.addEventListener("click", handleClick)
