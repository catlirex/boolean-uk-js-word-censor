const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";


//   Description
// Our program takes in text, a list of words to censor, what to censor them with (****, BEEP, xxx, !!!, etc), and it returns a censored version of the text.

// Instructions

// - Use the provided string as a text input to be censored
// - You don't have to use prompts for now, just hard-code the rest of your user inputs
// - Create a function that takes a replacement string, a word to censor, and censors the text input
// - Print out the censored text to the console

function censerText (){

  const splitRule = /(?=[.\s]|\b)/

  let toFilterText = prompt("Please enter the full text to censor.")
  let splitToFilterText = toFilterText.split(splitRule)

  const censerWord = prompt("Please enter the word to be censored")
  const replaceWord = prompt("What should replace the censored words?")

  const filteredText = []
  let censoredCounter = 0

  for(const word of splitToFilterText){
    if(word.localeCompare(censerWord, undefined, { sensitivity: 'accent' }) === 0){
      filteredText.push(replaceWord)
      censoredCounter ++
    }
    else{
      filteredText.push(word)
    }
  }

  console.log(`Filtered text: 
  ${filteredText.join("")}

  Censored word count: ${censoredCounter}`)
}

censerText();