var headerBtns = document.querySelectorAll(".header-logo");
var more = document.querySelector(".header-more");
var home = document.querySelector(".home");
var skill = document.querySelector(".skills");
var skillTab = document.querySelectorAll(".skill");
var numberSkill = document.querySelectorAll(".skill-number");
var skillContent = document.querySelector(".skills-content");
var textHomeHeading = document.querySelector(".home-heading");
var homeContent = document.querySelector(".home-content");
var homeImg = document.querySelector(".home-img");
var moreContent = document.querySelectorAll(".more-content");
var resume = document.querySelector(".resume");
var homeMail = document.querySelector(".home-mail");
console.log("hello");
/* main */
function start() {
  headerMore();
}
start();
function headerMore() {
  headerBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      removeEfHeader();
      btn.classList.toggle("header--active");
      if (index == 2) {
        openMore();
      }
      if (index == 1) {
        skills();
      }
      if (index == 0) {
        Home();
      }
    });
  });
}

function openMore() {
  more.classList.toggle("active");
  moreBtn();
}
function removeEfHeader() {
  headerBtns.forEach((header) => {
    header.classList.remove("header--active");
  });
}
function skills() {
  removeHome();
  removeResume();
  skill.classList.remove("opc-hidden");
  setTimeout(() => {
    skill.style.display = "block";
    skillNumber();
  }, 200);
}

function Home() {
  home.classList.remove("opc-hidden");
  homeEfect();
  removeSkill();
  removeResume();
  setTimeout(() => {
    home.style.display = "block";
  }, 200);
}

function resumeOn() {
  resume.classList.remove("opc-hidden");
  console.log("resume");
}

function removeResume() {
  resume.classList.add("opc-hidden");
}

function skillNumber() {
  var array = [];
  numberSkill.forEach((number, index) => {
    array.push(number.getAttribute("data-number"));
    number.innerText = array[index];
  });
  skillTab.forEach((skill, index) => {
    skill.style.width = array[index];
  });
}

function removeHome() {
  home.classList.add("opc-hidden");
  homeImg.classList.add("opc-hidden");
  homeContent.classList.add("opc-hidden");
  textHomeHeading.classList.add("opc-hidden");
  homeMail.classList.add("opc-hidden");
  setTimeout(() => {
    home.style.display = "none";
    skillNumber();
  }, 200);
}
function removeSkill() {
  skill.classList.add("opc-hidden");
  setTimeout(() => {
    skill.style.display = "none";
    skillNumber();
  }, 200);
}

function homeEfect() {
  homeImg.classList.remove("opc-hidden");
  homeContent.classList.remove("opc-hidden");
  textHomeHeading.classList.remove("opc-hidden");
  homeMail.classList.remove("opc-hidden");
}

window.onload = () => {
  homeEfect();
};

function moreBtn() {
  moreContent.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      console.log(btn);
      removeHome();
      removeEfHeader();
      removeSkill();
      if (index == 0) {
        resumeOn();
      }
    });
  });
}
