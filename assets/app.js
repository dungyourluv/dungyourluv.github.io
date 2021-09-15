var btns = document.querySelectorAll(".header-btn");
var tasks = document.querySelectorAll(".js--remove");
var slider = document.querySelector(".play-control-slider");
if (screen.width <= 740) {
  window.location.href = "./assets/html/mobile.html";
}
function start() {
  loader();
  /* custom();
  creStory(); */
  avtChange();
  /* click();
   */
}
start();

function loader() {
  var div = document.createElement("div");
  div.innerHTML = `<div class="main-loader">
 <i class="fas fa-spinner loader--icon"></i>
</div>`;
  document.getElementById("main").appendChild(div);
  var loader = document.querySelector(".main-loader");
  setTimeout(() => {
    loader.classList.add("load--hidden");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
    custom();
    creStory();
    click();
  }, 2000);
}

function btnRemove() {
  btns.forEach((btn) => {
    btn.classList.remove("header--btn-active");
  });
}

function click() {
  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btnRemove();
      btn.classList.add("header--btn-active");
      switch (i) {
        case 0:
          remove();
          break;
        case 1 /* resume */:
          remove();
          tasks[i - 1].classList.add("add--size", "active", "add--slider");
          animation(i - 1);
          break;
        case 2 /* skill */:
          remove();
          tasks[i - 1].classList.add("add--size", "active", "add--slider");
          animation(i - 1);
          skills();

          break;
        case 3 /* highlight */:
          remove();
          tasks[i - 1].classList.add("add--size", "active", "add--slider");
          animation(i - 1);

          break;
        case 4 /* download */:
          remove();
          tasks[i - 1].classList.add("add--size", "active", "add--slider");
          animation(i - 1);

          break;
        default:
          break;
      }
    });
  });
}

function remove() {
  tasks.forEach((task) => {
    task.classList.remove("add--size", "active", "add--slider");
  });
}

function skills() {
  var numbers = document.querySelectorAll(".skill-number");
  var skills = document.querySelectorAll(".skill");
  var data = [];
  numbers.forEach((number, i) => {
    let stt = number.getAttribute(`data-number`);
    data.push(stt);
    number.innerText = stt;
  });
  skills.forEach((skill, i) => {
    skill.style.width = data[i];
  });
}

function animation(index) {
  var contents = document.querySelectorAll(".content--sub");
  contents[index].style.left = "0";
}

function custom() {
  const values = [];
  const mail = document.querySelector(".main-maill");
  mail.innerText = "corepper03@gmail.com";
  const headers = document.querySelectorAll(".header-btn");
  const contentHeader = document.querySelectorAll(".content-main-header > h1");
  headers.forEach((value) => {
    values.push(value.innerText);
  });
  contentHeader.forEach((ch, i) => {
    ch.innerText = values[i + 1];
  });
}

function creStory() {
  class storys {
    constructor(head, time, content, author, name) {
      (this.head = head),
        (this.time = time),
        (this.content = content),
        (this.author = author);
      this.name = name;
    }
  }

  var storyContainer = document.querySelector(".resume-content");

  var arrayStory = [
    (loveStory1 = new storys(
      "Ai?",
      "13 sep 2021",
      "Ai không giả dối, ai không dễ thay đổi, không ai là ai của ai hết. Hà tất phải coi một số người, một số chuyện quan trọng đến thế.",
      "lethedung",
      "Don’t cry because it’s over, smile because it happened"
    )),
    (loveStory2 = new storys(
      "Cuộc sống",
      "13 sep 2021",
      "Cuộc sống giống như đi xe đạp. Để giữ thăng bằng, bạn phải tiếp tục di chuyển",
      "Albert Einstein",
      "You only live once, but if you do it right, once is enough"
    )),
    (loveStory3 = new storys(
      "Mục tiêu",
      "13 sep 2021",
      "Mục tiêu của cuộc sống là bị khuất phục trước những điều lớn lao và lớn lao hơn nữa",
      "Rainer Maria Rilke",
      "In three words I can sum up everything I’ve learned about life: it goes on"
    )),
  ];
  arrayStory.forEach((story) => {
    var htmlStory = `<div class="resume-content-text">
  <h2 class="resume-heading">${story.head}</h2>
  <span>${story.time}</span>
  <p class="resume-text">
  ${story.content}
  </p>
  <p class="resume-sub-text">"${story.author}"</p>
  <div class="resume-stick2"></div>
  <div class="resume-note">${story.name}</div>
</div>`;
    storyContainer.innerHTML += htmlStory;
  });
}

function avtChange() {
  var avt = document.querySelector(".main-avt > img");
  var arrayAvt = [
    "./assets/imgs/image.jpg",
    "./assets/imgs/image1.jpg",
    "./assets/imgs/image2.jpg",
    "./assets/imgs/image3.jpg",
  ];
  var i = 0;
  setInterval(() => {
    if (i < arrayAvt.length) {
      avt.setAttribute("src", arrayAvt[i]);
      i++;
    } else i = 0;
  }, 3000);
}
/* roman: "./assets/audio/roman.mp3",
lemontree: "./assets/audio/lemontree.mp3", */

/* playlist */
var songList = document.querySelector(".play-list-song");
var audio = document.querySelector(".audio");
var playButton = document.querySelector(".play--play");
var nextButton = document.querySelector(".play--next");
var backButton = document.querySelector(".play--back");
var pauseButton = document.querySelector(".play--pause");
var mainImgSong = document.querySelector(".play-img");
var mainNameSong = document.querySelector(".play-info > span");
var mainTimeSong = document.querySelector(".play-info > p");
var slider = document.querySelector(".slider");
var songPlay = 0;
var listSong = [
  {
    nameSong: "bỏ em vào balo",
    author: "tân trần",
    link: "./assets/audio/boemvaobalo.mp3",
    img: "./assets/imgs/image1.jpg",
  },
  {
    nameSong: "yêu xa",
    author: "vũ cát tường",
    link: "./assets/audio/yeuxa.mp3",
    img: "./assets/imgs/image.jpg",
  },
  {
    nameSong: "chiều nay không có mưa bay",
    author: "trung quân idol",
    link: "./assets/audio/chieunaykhongcomuabay.mp3",
    img: "./assets/imgs/image1.jpg",
  },
  {
    nameSong: "hạ còn vương nắng",
    author: "datkaa x kido x prod",
    link: "./assets/audio/haconvuongnang.mp3",
    img: "./assets/imgs/image.jpg",
  },
];

/* background-image: url(./imgs/image.jpg); */
/* khoi chay function */
function songStart() {
  renderListSong();
  eventPlay();
}
songStart();
/* render song */
function renderListSong() {
  var newListSong = listSong.map((song) => {
    return `<div class="song">
    <div class="song-avt"></div>
    <div class="song-info">
      <h1>${song.nameSong}</h1>
      <span>${song.author}</span>
    </div>
  </div>`;
  });
  songList.innerHTML = newListSong.join("");
  /* var lan 2 */
  var imgSong = document.querySelectorAll(".song-avt");
  var song = document.querySelectorAll(".song");
  listSong.forEach((img, index) => {
    imgSong[index].style.backgroundImage = `url(${img.img})`;
  });
  /* set deful main song */
  audio.src = listSong[0].link;
  mainImgSong.style.backgroundImage = `url(${listSong[0].img})`;
  mainNameSong.innerText = listSong[0].nameSong;
  song[0].classList.add("active--song");
  chooseMusic(song, listSong, audio);
  nextSong(song, listSong, audio);
  moveSlider();
}
/* disk animation */
var keyFrame = [
  {
    transform: "rotate(360deg)",
  },
];
var animateSong = mainImgSong.animate(keyFrame, {
  duration: 10000, //10 second,
  iterations: Infinity,
});
animateSong.pause();
/* tinh thoi gian cua slider */

function sliderTime() {
  var sumTime = audio.duration;
  var presentTime = audio.currentTime;
  var progress = Math.floor((presentTime / sumTime) * 100);
  slider.value = progress;
  if (slider.value == 100) {
    playBtnChange(false);
  }
}
/* Tua bài  */

function moveSlider() {
  slider.onchange = function () {
    var seekTime = (slider.value * audio.duration) / 100;
    audio.currentTime = seekTime;
  };
}

/* slider run */
function sliderRun() {
  audio.ontimeupdate = function () {
    sliderTime();
  };
}

/* playBtn change */

function playBtnChange(isPlay) {
  if (isPlay) {
    playButton.style.display = "none";
    pauseButton.style.display = "initial";
  } else {
    pauseButton.style.display = "none";
    playButton.style.display = "initial";
  }
}
/* main Music change */
function nameImgChange(index) {
  mainImgSong.style.backgroundImage = `url(${listSong[index].img})`;
  mainNameSong.innerText = listSong[index].nameSong;
}
/* listen event play */

function eventPlay() {
  /* play audio */
  var isPlaying = false;
  playButton.onclick = function () {
    audio.play();
    isPlaying = true;
    playBtnChange(isPlaying);
    sliderRun();
    animateSong.play();
  };
  pauseButton.onclick = function () {
    audio.pause();
    isPlaying = false;
    playBtnChange(isPlaying);
    animateSong.pause();
  };
}
/* choose music */
function chooseMusic(song, listSong, audio) {
  song.forEach((sog, index) => {
    sog.onclick = function () {
      song.forEach((remove) => {
        remove.classList.remove("active--song");
      });
      sog.classList.add("active--song");
      var link = listSong[index].link;
      audio.src = link;
      audio.play();
      playBtnChange(true);
      nameImgChange(index);
      animateSong.play();
      songPlay = index;
    };
  });
}

/* next song */

function nextSong(song, listSong, audio) {
  nextButton.onclick = function () {
    if (songPlay < song.length - 1) {
      songPlay++;
    } else songPlay = 0;
    var link = listSong[songPlay].link;
    audio.src = link;
    audio.play();
    animateSong.play();
    playBtnChange(true);
    nameImgChange(songPlay);
    song.forEach((sogRemove) => {
      sogRemove.classList.remove("active--song");
    });
    song[songPlay].classList.add("active--song");
  };
  backButton.onclick = function () {
    /* code bị lặp lại fix sau */
    if (songPlay > 0 && songPlay <= song.length - 1) {
      songPlay--;
    } else return;
    console.log(songPlay);
    var link = listSong[songPlay].link;
    audio.src = link;
    audio.play();
    playBtnChange(true);
    nameImgChange(songPlay);
    animateSong.play();
    song.forEach((sogRemove) => {
      sogRemove.classList.remove("active--song");
    });
    song[songPlay].classList.add("active--song");
  };
}
