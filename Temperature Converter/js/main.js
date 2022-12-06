//Write your pseduo code first!

const cold = document.getElementById("cold");
const justRight = document.getElementById("justRight");
const hot = document.getElementById("hot");
const whatsThat = document.getElementById("whatsThat");

document.querySelector("#convertTemp").addEventListener("click", temperature);

function temperature() {
  let celsius = document.querySelector("#tempCel").value;
  let fahrnheit = Math.floor(celsius * 1.8 + 32);

  document.querySelector("#tempFahr").innerText = `${
    fahrnheit ? fahrnheit : "...Didn't get that... 🤔"
  }`;

  if (fahrnheit <= 41) {
    cold.classList.toggle("hidden");
    justRight.classList.add("hidden");
    hot.classList.add("hidden");
    whatsThat.add("hidden");
  } else if (fahrnheit > 41 && fahrnheit < 86) {
    justRight.classList.toggle("hidden");
    hot.classList.add("hidden");
    cold.classList.add("hidden");
    whatsThat.add("hidden");
  } else if (fahrnheit > 86) {
    hot.classList.toggle("hidden");
    justRight.classList.add("hidden");
    cold.classList.add("hidden");
    whatsThat.add("hidden");
  } else {
    whatsThat.toggle("hidden");
    cold.classList.add("hidden");
    hot.classList.add("hidden");
    justRight.classList.add("hidden");
  }
}
