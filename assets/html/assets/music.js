var songList = document.querySelector(".play-list-song");
var audio = document.querySelector(".audio");
var playButton = document.querySelector(".play--play");
var nextButton = document.querySelector(".play--next");
var backButton = document.querySelector(".play--back");
var pauseButton = document.querySelector(".play--pause");
var mainImgSong = document.querySelector(".play-img");
var mainNameSong = document.querySelector(".play-info > span");
var mainTimeSong = document.querySelector(".play-info > p");
var playInfo = document.querySelector(".play-info");
var slider = document.querySelector(".slider");
var music = document.querySelector(".music");
var songPlay = 0;
var listSong = [
  {
    nameSong: "Anh đánh rơi người yêu này",
    author: "Ameee",
    link: "./assets/audio/anhdanhroinguoiyeunay.mp3",
    img: "./assets/imgs/image2.jpg",
  },
  {
    nameSong: "đón xuân",
    author: "trayde x mien mien",
    link: "./assets/audio/donxuan.mp3",
    img: "./assets/imgs/image3.jpg",
  },
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
/* get noti */
var noti = document.querySelector(".noti");
var notiContent = document.querySelector(".noti-container");
var notiBtnYes = document.querySelector(".noti-btn > button");
var notiBtnNo = document.querySelector(".noti-btn > span");
var audio = document.querySelector(".audio");

/* noti event */
function notiEvent() {
  notiBtnYes.onclick = function () {
    var i = 0,
      howManyTimes = 100;
    function f() {
      notiContent.style.bottom = i + "%";
      i++;
      if (i <= howManyTimes) {
        setTimeout(f, 5);
      }
      if (i === 100) {
        noti.style.display = "none";
        audio.play();
        playBtnChange(true);
        animateSong.play();
        sliderRun();
        moveSlider();
      }
    }
    f();
  };
  notiBtnNo.onclick = function () {
    var i = 0,
      howManyTimes = 100;
    function f() {
      notiContent.style.bottom = i + "%";
      i++;
      if (i <= howManyTimes) {
        setTimeout(f, 5);
      }
      if (i === 100) {
        noti.style.display = "none";
      }
    }
    f();
  };
}
notiEvent();
