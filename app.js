var content = document.querySelector(".content");
var noBtn = content.querySelector(".btn.no");
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var yesBtn = content.querySelector(".btn.yes");
var heading = document.querySelector(".heading.love").innerHTML;
var YourName = "";

function start() {
  btnMove();
  yesBtnClick();
  popUp();
}

start();
console.log(width, height);

function ramdomNumber() {
  var ramdomWidth = Math.floor(Math.random() * width);
  var ramdomHeight = Math.floor(Math.random() * height);
  return [ramdomHeight, ramdomWidth];
}

function btnMove() {
  noBtn.addEventListener("mouseover", function () {
    noBtn.style.left = `${ramdomNumber()[0] / 2 - 200}px`;
    noBtn.style.top = `${ramdomNumber()[1] / 3 - 42}px`;
    subMove();
  });
  noBtn.addEventListener("click", function () {
    noBtn.style.left = `${ramdomNumber()[0] / 2 - 200}px`;
    noBtn.style.top = `${ramdomNumber()[1] - 42}px`;
    subMove();
  });
}
var index = 0;
function yesBtnClick() {
  var mainLove = document.querySelector(".content-love");
  yesBtn.addEventListener("click", function () {
    mainLove.classList.add("active");
  });
  var close = document.querySelector(".close");
  close.addEventListener("click", function () {
    mainLove.classList.remove("active");
  });
  typeText(".input-text", "Tại nhà anh giàu <33333333");
  typeText2(".pop-name", "Duy đẹp gái");
}

var textcheck = "";
function typeText(element, text) {
  var cre = document.querySelector(".text");
  cre.innerHTML = "Made by  DunG chicken";
  var i = 0;
  var change = document.querySelector(element);
  change.addEventListener("keyup", function () {
    if (i < text.length + 1) {
      document.querySelector(element).value = "";
      document.querySelector(element).value = text.slice(0, i);
      i++;
      index += 1;
    } else {
      document.querySelector(element).value = text.slice(0, text.length);
    }
  });
  let subMit = document.querySelector(".submit");
  subMit.addEventListener("click", function () {
    if (index >= text.length) {
      document.querySelector(".noti-form2").classList.remove("active");
      document.querySelector(".input-text").style.border = "none";

      let content = document.querySelector(".submit-content");
      content.classList.add("active");
      document.querySelector(
        ".submit-content > p:nth-child(1)"
      ).innerText = `Nhà anh giàu bởi vì anh có em đấy ${YourName} à <3`;
      document.querySelector(
        ".submit-content > p:nth-child(2)"
      ).innerText = `yêu ${YourName} 3000 <3`;
      document.querySelector(".btn-submit").onclick = function () {
        window.location.href = "https://www.facebook.com/teee.dunn/";
      };
    } else {
      document.querySelector(".input-text").style.border = "2px solid red";
      document.querySelector(".noti-form2").classList.add("active");
    }
  });
}

function typeText2(element, text) {
  var change = document.querySelector(element);
  change.addEventListener("keyup", function () {
    document.querySelector(element).value = text.slice(0, text.length);
  });
}

function popUp() {
  var popBtn = document.querySelector(".pop-btn");
  popBtn.addEventListener("click", function () {
    document.querySelector(".sub-no").classList.add("active");
    setTimeout(function () {
      document.querySelector(".sub-no").classList.remove("active");
    }, 3000);
    popClick();
  });
}

function popClick() {
  var name = document.querySelector(".pop-name").value;
  if (name.length < 2) {
    alert("nhập tên cmm đi đù");
  } else {
    YourName = name;
    var popUp = document.querySelector(".pop-up");
    popUp.classList.remove("active");
    alert(`Chào ${YourName} anh đứng đây từ chiều`);
    document.querySelector(
      ".heading"
    ).innerHTML = `Chào ${YourName} yêu dấu, ${YourName} làm người yêu tớ nhé!`;
    document.querySelector(
      ".sub-heading"
    ).innerHTML = `Dit me ${YourName} Nhé, ${YourName} k yêu tớ tớ oánh chết mọe nhé!`;
    document.querySelector(
      ".heading.love"
    ).innerHTML = `${YourName} của tớ ơi, cho tớ hỏi tại sao cậu lại click vào nút xanh thế nhỉ hihi`;
    document.querySelector(
      ".noti-form2"
    ).innerText = `Trả lời hết đi mà ${YourName}`;
  }
}
function subMove() {
  var subContent = [
    "Đố em bắt được anh",
    "Không bắt được làm chóa hihi",
    "Bắt anh đi em ",
    "nhấn nút màu Xanh kìa emm",
    "Không nhấn được tớ đâu hihihi",
    "Bảo nhấn thì nhấn đi cứ cố nhấn anh làm gì",
    "Thôi mà em em khó tính quá đó",
    "Anh ở đây nè",
    "Bắt anh đi em ơi, anh đang chờ",
  ];
  let ramdomNumber = Math.floor(Math.random() * subContent.length);
  var subNo = document.querySelector(".sub-no");
  subNo.classList.add("active");
  subNo.innerText = subContent[ramdomNumber];
  setTimeout(function () {
    subNo.classList.remove("active");
  }, 3000);
}

function onSubmit() {
  let subMit = document.querySelector(".submit");
  subMit.addEventListener("click", function () {
    let content = document.querySelector(".submit-content");
    content.classList.add("active");
    document.querySelector(
      ".submit-content > p:nth-child(1)"
    ).innerText = `Nhà anh giàu bởi vì anh có em đấy ${YourName} à <3`;
    document.querySelector(
      ".submit-content > p:nth-child(2)"
    ).innerText = `yêu ${YourName} 3000 <3`;
    document.querySelector(".btn-submit").onclick = function () {
      window.location.href = "https://www.facebook.com/teee.dunn/";
    };
  });
}
