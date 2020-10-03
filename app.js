const refresh = document.getElementById("refresh");
const span = document.querySelector("span");
const h2 = document.querySelector("h2");
const level = document.getElementById("level");
const squares = document.querySelectorAll(".square");
const message = document.getElementById("message");
let numSquare = 9
let colors = generateColor(numSquare);
let colorDisplay = pickedColor();
h2.innerHTML = colorDisplay;

//game logic
for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    let clicked = this.style.backgroundColor;
    if (clicked === colorDisplay) {
      correct(clicked);
      message.innerHTML = "Correct!";
    } else {
      message.innerHTML = "try again!";
    }
  });
}

refresh.addEventListener("click", gameRefresh);

function gameRefresh() {
  colors = generateColor(9);
  let colorDisplay = pickedColor();
  h2.innerHTML = colorDisplay;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
      let clicked = this.style.backgroundColor;
      if (clicked === colorDisplay) {
        correct(clicked);
        message.innerHTML = "Correct!";
      } else {
        message.innerHTML = "try again!";
      }
    });
  }
  h2.style.backgroundColor = "";
  message.innerHTML = "";
}

function correct(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  h2.style.backgroundColor = color;
  message.innerHTML = " ";
}

function pickedColor() {
  const randomNum = colors[Math.floor(Math.random() * colors.length)];
  return randomNum;
}

function generateColor(num) {
  let colorArray = [];
  for (let i = 0; i < num; i++) {
    colorArray.push(randomColor());
  }
  return colorArray;
}

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  return rgbColor;
}
