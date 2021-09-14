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
var moreContent = document.querySelector(".more-content");
var resume = document.querySelector(".resume");
var homeMail = document.querySelector(".home-mail");
var playlists = document.querySelector(".playlists");
var moreChoose = document.querySelectorAll(".add--more");
var playIcon = document.querySelector(".start");
var pauseIcon = document.querySelector(".pause--icon");
var audioContainer = document.querySelector(".audio-container");
var listMusics = document.querySelector(".play-list");
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
  removePlayList();
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
  removePlayList();
}

function resumeOn() {
  resume.classList.remove("opc-hidden");
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
  moreChoose.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      removeHome();
      removeEfHeader();
      removeSkill();
      if (index == 0) {
        removePlayList();
        resumeOn();
      }
      if (index == 1) {
        playlistOn();
      }
    });
  });
}

function playlistOn() {
  playlists.classList.remove("opc-hidden");
  resume.classList.add("opc-hidden");
  addListMusic();
}

function removePlayList() {
  playlists.classList.add("opc-hidden");
}

function controlPlays(song) {
  playIcon.addEventListener("click", () => {
    playIcon.style.display = "none";
    pauseIcon.style.display = "initial";
    song.play();
  });
  pauseIcon.addEventListener("click", () => {
    pauseIcon.style.display = "none";
    playIcon.style.display = "initial";
    song.pause();
  });
}

/* list music */
class Music {
  constructor(name, img, url, author) {
    (this.name = name),
      (this.img = img),
      (this.url = url),
      (this.author = author);
  }
}
var MusicList = [
  new Music(
    "Yêu xa",
    "./assets/imgs/image.jpg",
    "./assets/audio/yeuxa.mp3",
    "Vũ Cát Tường"
  ),
  new Music(
    "Hẹn Một Mai",
    "./assets/imgs/image1.jpg",
    "./assets/audio/henmotmai.mp3",
    "Vũ Cát Tường"
  ),
  new Music(
    "Lemon tree",
    "./assets/imgs/image.jpg",
    "./assets/audio/lemontree.mp3",
    "Vũ Cát Tường"
  ),
];
function addListMusic() {
  MusicList.forEach((music, index) => {
    audioContainer.innerHTML += `<audio src=" ${music.url} " data-number="${index}"></audio>`;
    listMusics.innerHTML += ` <div class="play-list-container">
     <div class="list-img">
       <img src="${music.img}" alt="">
     </div>
     <div class="list-info">
       <h1 class="song-name">${music.name}</h1>
       <span>${music.author}</span>
     </div>`;
  });
  var songItem = document.querySelectorAll(".play-list-container");
  var song = document.querySelectorAll(".audio-container > audio");
  var header = document.querySelector(".play-header > p");
  var nextSong = document.querySelector(".next--song");
  var backSong = document.querySelector(".back--song");

  function NextBackSong(next, back) {
    var indexNext = next;
    var indexBack = back;
    nextSong.addEventListener("click", () => {
      if (next < songItem.length) {
        musicInListPlay();
      }
    });

    backSong.addEventListener("click", () => {});
  }

  function musicInListPlay() {
    songItem.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        NextBackSong(index + 1, index - 1);
        let nameSong = btn.querySelector(".song-name").innerText;
        header.innerText = nameSong;
        playMusic(index);
      });
    });
  }
  musicInListPlay();
  function playMusic(i) {
    songItem.forEach((a) => {
      a.classList.remove("play--hover");
    });
    song.forEach((s) => {
      s.pause();
    });
    song[i].play();
    controlPlays(song[i]);

    songItem[i].classList.add("play--hover");
    playIcon.style.display = "none";
    pauseIcon.style.display = "initial";
  }
}
