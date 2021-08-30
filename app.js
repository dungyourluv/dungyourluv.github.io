var boxs = document.querySelectorAll(".box");
var table = document.querySelector(".table");
var waring = document.getElementById("alert");
var i = 1;
var arraay = [];
var winNer = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxs.forEach(function (box, index) {
  box.addEventListener("click", function a() {
    if (i == 1) {
      i = 0;
      arraay.push(index);
      box.classList.add("x");
      box.removeEventListener("click", a);
      table.classList.remove("this-x");
      checkWinner();
      checkAi();
    } else {
      i = 1;
      box.classList.add("o");
      arraay.push(index);
      table.classList.add("this-x");
      box.removeEventListener("click", a);
      checkWinner();
    }
  });
});

function checkWinner() {
  var xWin = winNer.some(function (win) {
    return win.every(function (check) {
      if (boxs[check].classList.contains("x")) {
        return true;
      }
    });
  });
  var oWin = winNer.some(function (win) {
    return win.every(function (check) {
      if (boxs[check].classList.contains("o")) {
        return true;
      }
    });
  });
  if (xWin === true) {
    alert("X win, reload");
    location.reload();
  } else if (oWin === true) {
    alert("O win, reload");
    location.reload();
  } else if (arraay.length >= 9) {
    alert("Draw , reload");
    location.reload();
  }
}
var Ai = Math.floor(Math.random() * 10);
function checkAi() {
  if (!boxs[Ai].classList.contains("o") && !boxs[Ai].classList.contains("x")) {
    console.log("Ai");
  } else console.log(Ai);
}
