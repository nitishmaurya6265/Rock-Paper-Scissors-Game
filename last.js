let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let result = document.querySelector(".result");
let yourScore=document.querySelector('.yourWinsNo');
let compScore=document.querySelector('.compWinsNo');

const arr = ["Rock", "Paper", "Scissor"];

let yourCount=0;
let compCount=0;
// Generate a random index

// Get the random value
// const compCh = arr[randomIndex];

let yourCh = "";
rock.addEventListener("click", () => {
  yourCh = rock.innerText;
  playRound(yourCh);
  //   console.log(yourCh);
});

paper.addEventListener("click", () => {
  yourCh = paper.innerText;
  playRound(yourCh);
  console.log(yourCh);
});

scissor.addEventListener("click", () => {
  yourCh = scissor.innerText;
  playRound(yourCh);

});

function playRound(user) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const compCh = arr[randomIndex];

  if (user == compCh) {
    result.textContent = "Game Draw!";
    result.style.backgroundColor = "grey";
  } else if (
    (user == "Rock" && compCh == "Scissor") ||
    (user == "Scissor" && compCh == "Paper") ||
    (user == "Paper" && compCh == "Rock")
  ) {
     result.textContent = "YOU WIN "+user+" beats "+compCh;
    result.style.backgroundColor = "green";
   
    yourScore.innerText=+yourScore.innerText+1;

  } else {
      result.textContent = "COMPUTER WIN "+compCh+" Beats "+user;
    result.style.backgroundColor = "blue";
    compScore.innerText=+compScore.innerText+1;
  }
  return;
}
