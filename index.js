let grassCount = document.getElementById("grass-count");
let prevScores = document.getElementById("scores");
let count = 0;

function increment() {
  count += 1;

  grassCount.textContent = count;
}

function save() {
  if (count == 0) {
    alert("Brother, you didn't even touch it once.....");
  } else {
    saveScores = count + " - ";
    prevScores.textContent += " " + saveScores;
    grassCount.textContent = 0;
    count = 0;
  }
}
