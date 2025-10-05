// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "100px";

// console.log(dodger.style.bottom);

// dodger.style.bottom = "0px";
// dodger.style.left = "0px";

// console.log(dodger.style.);

console.log(game.offsetWidth);

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  } else return;
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    console.log(dodger.style.left);
    dodger.style.left = `${left + 1}px`;
  } else return;
}

document.addEventListener("keydown", function (event) {
  console.log(event);

  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else moveDodgerRight();
});
