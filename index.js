var randomNumber1 = 0
var randomNumber2 = 0
randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1]
image1.setAttribute("src", ("images/dice" + randomNumber1 + ".png"));
randomNumber2 = Math.floor(Math.random() * 6) + 1;
image2.setAttribute("src", ("images/dice" + randomNumber2 + ".png"));
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "It's a draw!";
};
