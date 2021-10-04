const btnFake = document.querySelector(".fake-click");
const formFake = document.querySelector(".form-fake");
const subMit = document.querySelector(".submit");
const back = document.querySelector(".back");
const backFake = document.querySelector(".btn > button");
const checkForm = document.querySelectorAll(".check-point > p");
const names = document.querySelector(".info-form > b");

backFake.onclick = function () {
  btnFake.style.display = "block";
};
btnFake.onclick = function () {
  handle();
};
back.onclick = function () {
  unhandle();
};
subMit.onclick = function () {
  submit();
  ramdom();
};
function handle() {
  btnFake.style.display = "none";
  formFake.style.display = "block";
}
function unhandle() {
  btnFake.style.display = "block";
  formFake.style.display = "none";
}
function submit() {
  btnFake.style.display = "none";
  formFake.style.display = "none";
}

function ramdom() {
  const inputName = document.querySelector(".answer").value;
  names.innerText = inputName;
  var answers = Math.floor(Math.random() * 30);
  var point = answers * 5;
  var time = "00:" + "0" + Math.floor(Math.random() * 9);
  var secound = Math.floor(Math.random() * 10);
  if (secound < 10) {
    secound = "0" + secound;
  }
  checkForm[0].innerText = answers + "/30";
  checkForm[1].innerText = point;
  checkForm[2].innerText = time + ":" + secound;
}
checkForm.forEach((f) => {
  console.log(f);
});
