// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

const dodgerR = document.getElementById("dodger");
  function moveDodgerRight() {
    const leftNumbers = dodgerR.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 400) {
      dodgerR.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keyDown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });