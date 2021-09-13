var btns = document.querySelectorAll(".header-btn");
var tasks = document.querySelectorAll(".js--remove");
var slider = document.querySelector(".play-control-slider");

function start() {
  loader();
  /* custom();
  creStory(); */
  avtChange();
  /* click();
   */
  audio();
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
/* audio */
function audio() {
  var playlists = document.querySelector(".play-lists-items");
  class musicList {
    constructor(name, url, author, img) {
      (this.name = name),
        (this.url = url),
        (this.author = author),
        (this.img = img);
    }
  }
  var arrayImgSong = [
    "./assets/imgs/image.jpg",
    "./assets/imgs/image1.jpg",
    "./assets/imgs/image2.jpg",
    "./assets/imgs/image3.jpg",
  ];
  var listSong = [
    new musicList(
      "roman",
      "./assets/audio/roman.mp3",
      "dung",
      "./assets/imgs/image.jpg"
    ),
    new musicList(
      "lemon tree",
      "./assets/audio/lemontree.mp3",
      "dung",
      "./assets/imgs/image1.jpg"
    ),
    new musicList(
      "Yêu xa",
      "./assets/audio/yeuxa.mp3",
      "Quang Trung",
      "./assets/imgs/image.jpg"
    ),
    new musicList(
      "Hẹn một mai",
      "./assets/audio/henmotmai.mp3",
      "Bùi Anh Tuấn",
      "./assets/imgs/image1.jpg"
    ),
  ];

  var songName = document.querySelector(".song-play-name");
  var imgRote = document.querySelectorAll(".play-list-img");

  listSong.forEach((song) => {
    var playlistsHtml = `
  <li class="play-list-item">
    <div class="play-list-img">
      <img src="${song.img}" alt="">
    </div>
    <div class="play-list-title">
      <h2 class="song-name"> ${song.name} </h2>
      <div class="sub-song-name">
        <span> ${song.author} </span>
        <span>Time</span>
      </div>
    </div>
  </li>`;
    playlists.innerHTML += playlistsHtml;
    var audios = document.querySelector(".play-audio > audio");
    var play = document.querySelector(".start");
    var pause = document.querySelector(".pause--icon");
    var listBtns = document.querySelectorAll(".play-list-item");

    play.addEventListener("click", () => {
      audios.setAttribute("src", listSong[0].url);
      songName.innerText = listSong[0].name;
      audios.play();

      play.style.display = "none";
      pause.style.display = "inline";
    });
    pause.addEventListener("click", () => {
      audios.pause();
      removeMusicRote();
      pause.style.display = "none";
      play.style.display = "inline";
    });
    listBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        audios.setAttribute("src", listSong[index].url);
        audios.play();
        play.style.display = "none";
        pause.style.display = "inline";
        songName.innerText = listSong[index].name;
        removeMusicRote();
        btn.querySelector(".play-list-img").classList.add("music--rote");
        btn.classList.add("song--hover");
      });
    });
  });
}

function removeMusicRote() {
  var playList = document.querySelectorAll(".play-list-item");
  var imgRote = document.querySelectorAll(".play-list-img");
  imgRote.forEach((img) => {
    img.classList.remove("music--rote");
  });
  playList.forEach((play) => {
    play.classList.remove("song--hover");
  });
}
myInfo();
function myInfo() {
  var container = document.querySelector(".js--info");
  class contents {
    constructor(head, header, content) {
      (this.head = head), (this.header = header), (this.content = content);
    }
  }
  var arrayContent = [
    (content1 = new contents("A littel about me", "name", "le the dung abcs")),
    (content2 = new contents("favorite", "name", "le the dung abcs")),
    (content3 = new contents("crush", "name", "le the dung abcs")),
  ];

  arrayContent.forEach((content, index) => {
    container.innerHTML += ` <div class="main-heading">
    <p class="main-heading-text">
      <i class="far fa-id-badge text--icon"></i> ${arrayContent[index].head}
    </p>
  </div>
  <div class="resume-content">
    <div class="resume-content-text">
      <h2 class="resume-heading">${arrayContent[index].header}</h2>
      <span>13 sep 2021</span>
      <p class="resume-text">
        ${arrayContent[index].content}
      </p>
      <p class="resume-sub-text">"Made by lethedung"</p>
      <div class="resume-stick2"></div>
      <div class="resume-note">You scratch my back and I’ll scratch yours</div>
    </div>
  </div>`;
  });
}

/* var html = ` <div class="main-heading">
  <p class="main-heading-text">
    <i class="far fa-id-badge text--icon"></i> A little about me
  </p>
</div>
<div class="resume-content">
  <div class="resume-content-text">
    <h2 class="resume-heading">coming soon</h2>
    <span>13 sep 2021</span>
    <p class="resume-text">
      coming soon
    </p>
    <p class="resume-sub-text">"Made by lethedung"</p>
    <div class="resume-stick2"></div>
    <div class="resume-note">You scratch my back and I’ll scratch yours</div>
  </div>
</div>` */
