const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors"){
      return userInput;
  } else {
      console.log("Error, please type a valid choice.")
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It was a tie"
  }
  if (userChoice === "rock") {
    if(computerChoice === "paper"){
      return "You lose, Computer Won!"
    } else {
      return "You won!"
    }
  }

  if (userChoice === "paper"){
    if (computerChoice === "scissors") {
      return "You lose, Computer Won!"
    } else {
      return "You won!"
    }
  }

  if (userChoice === "scissors"){
    if (computerChoice === "rock"){
      return "You lose, Computer Won!"
    } else {
      return 'You won!'
    }
  }
}  
const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("you threw: " + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()

