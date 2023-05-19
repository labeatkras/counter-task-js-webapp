/*const resetButton = document.querySelector("#reset-button");
const counter = document.querySelector("#counter");
const mainCounter = document.querySelector("#main-counter");
const counterWrapper = document.querySelector("#counter-wrapper");
let count = 0;
function increaseCount() {
  count++;
  counter.innerText = count;
  mainCounter.style.width = count + "%";
  if (count > 100) {
    mainCounter.style.width = count - 100 + "%";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "Enter") {
    increaseCount();
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  counter.innerText = count;
  mainCounter.style.width = count;
});*/

const resetButton = document.querySelector("#reset-button");
const counter = document.querySelector("#counter");
const mainCounter = document.querySelector("#main");
let count = 0;

function increaseCount() {
  count++;
  counter.innerText = count;

  if (count <= 100) {
    mainCounter.style.width = count + "%";
    mainCounter.style.backgroundColor = "yellow";
  } else {
    const moduloCount = count % 100;
    mainCounter.style.width = moduloCount + "%";
    const backgroundColor = moduloCount === 0 ? "white" : "yellow";
    if (moduloCount === 0) {
      const repeatCount = Math.floor(count / 100) - 1;
      mainCounter.style.backgroundColor = `repeating-linear-gradient(45deg, 
        ${backgroundColor}, ${backgroundColor} 10px, yellow 10px, yellow 20px)`;
    } else {
      mainCounter.style.backgroundColor = backgroundColor;
    }
  }
}

document.addEventListener("click", function () {
  increaseCount();
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "Enter") {
    increaseCount();
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  counter.innerText = count;
  mainCounter.style.width = count;
});
/******* resetBUtton setzt nicht auf 0 zurück sondern auf 1 nach links ??? ********/
