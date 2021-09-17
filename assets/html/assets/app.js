var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
/* get header */
var homeIcon = $(".icon--home");
var navHome = $(".header-nav");
/* get home */
var mainHome = $(".home-info");
var nameHome = $(".name");
var subNameHome = $(".sub-name");
var tagHome = $(".home-tag");
var home = $(".home");
var homeAvt = $(".home-avt img");
/* get social */
var contentSocial = $(".user-social");
/* get user */
var userIcon = $(".icon--user");
var user = $(".user");
/* get music */
var musicIcon = $(".icon--music");
var music = $(".music");
/* get news */
var newsIcon = $(".icon--more");
var news = $(".news");
var newsContents = $(".news-content");
/* get code */
var codeIcon = $(".icon--code");
var code = $(".code");
var codeContents = $(".code-content");
var codeProject = $(".code-project");
/* get loader */
var loader = $(".loader");
var loaderIcon = $(".loader--icon");
/* loaderIcon spiner */
function loaderIconSpiner() {
  var keyFarme = [
    {
      transform: "rotate(360deg)",
    },
  ];
  loaderIcon.animate(keyFarme, {
    duration: 1000,
    iterations: Infinity,
  });
}
window.onload = function () {
  loader.classList.add("hidden");
};
/* ham chay */
function start() {
  loaderIconSpiner();
  headerEvent();
  socialRender();
  newsRender();
  projectRender();
  homeRender();
}
start();

/* loader*/

/* xu ly su kien header doan nay code luom thuom lap lai qua nhieu fix sau*/
isClick = false;
function homeShow() {
  //home show
  home.classList.remove("hidden");
  home.classList.add("active");
}
function homeHidden() {
  //home hidden
  home.classList.add("hidden");
  home.classList.remove("active");
}
function headerEvent() {
  //nav
  function navHidden() {
    navHome.classList.add("hidden");
    navHome.classList.remove("header-nav--active");
    isClick = false;
  }
  function navShow() {
    navHome.classList.remove("hidden");
    navHome.classList.add("header-nav--active");
    isClick = true;
  }
  //home click
  homeIcon.onclick = function (e) {
    if (isClick) {
      homeShow();
      userHidden();
      musicHidden();
      navHidden();
      newsHidden();
      codeHidden();
    } else {
      navShow();
    }
    e.stopPropagation();
  };
  //user click
  function userShow() {
    //user show
    user.classList.remove("hidden");
    user.classList.add("active");
  }
  function userHidden() {
    // user hidden
    user.classList.remove("active");
    user.classList.add("hidden");
  }
  userIcon.onclick = function () {
    homeHidden();
    musicHidden();
    userShow();
    navHidden();
    newsHidden();
    codeHidden();
  };
  // music click
  function musicShow() {
    // music show
    music.classList.remove("hidden");
    music.classList.add("active");
  }
  function musicHidden() {
    // music hidden
    music.classList.remove("active");
    music.classList.add("hidden");
  }
  musicIcon.onclick = function () {
    musicShow();
    homeHidden();
    userHidden();
    navHidden();
    newsHidden();
    codeHidden();
  };
  //news
  function newsShow() {
    // music show
    news.classList.remove("hidden");
    news.classList.add("active");
  }
  function newsHidden() {
    // news hidden
    news.classList.remove("active");
    news.classList.add("hidden");
  }
  newsIcon.onclick = function () {
    musicHidden();
    homeHidden();
    userHidden();
    navHidden();
    newsShow();
    codeHidden();
  };
  //code
  function codeShow() {
    // code show
    code.classList.remove("hidden");
    code.classList.add("active");
  }
  function codeHidden() {
    // code hidden
    code.classList.remove("active");
    code.classList.add("hidden");
  }

  codeIcon.onclick = function () {
    musicHidden();
    homeHidden();
    userHidden();
    navHidden();
    newsHidden();
    codeShow();
  };
}
/* change avt */
var i = 0;
let avt = [
  "./assets/imgs/image.jpg",
  "./assets/imgs/image1.jpg",
  "./assets/imgs/image2.jpg",
  "./assets/imgs/image3.jpg",
];
function changeAvt(i) {
  homeAvt.src = avt[i];
}
setInterval(() => {
  if (i < avt.length - 1) {
    changeAvt(i);
    i++;
  } else i = 0;
}, 3000);

/* home render */
function homeRender() {
  let contentHome = {
    nameHome: "lê thế dũng",
    subName:
      "Tôi là một doanh nhân người Việt, nhà từ thiện, tác giả và chủ tịch tập đoàn Microsoft, hãng phần mềm khổng lồ mà tôi cùng với Paul Allen đã sáng lập ra. tôi luôn có mặt trong danh sách những người giàu nhất trên thế giới. Wikipedia",
  };
  mainHome.innerHTML = `<h2 class="name">${contentHome.nameHome}</h2>
  <span>I'm a student, I don't stand out.</span>
  <p class="sub-name">${contentHome.subName}</p>
</div>`;
  tagHomes();
}

/* render tagHome */
function tagHomes() {
  class contentTag {
    constructor(name, color) {
      (this.name = name), (this.color = color);
    }
  }
  var tagArray = [
    new contentTag("thân thiện", "#F1C40F"),
    new contentTag("vui vẻ", "#E67E22"),
    new contentTag("hòa đồng", "#E74C3C"),
    new contentTag("vui tính", "#8E44AD"),
  ];
  tagArray.forEach((tag) => {
    tagHome.innerHTML += `<span style='background-color: ${tag.color} '> ${tag.name} </span>`;
  });
}

/* render social user */

function socialRender() {
  class social {
    constructor(logo, name, color, link) {
      (this.log = logo),
        (this.name = name),
        (this.color = color),
        (this.link = link);
    }
  }
  let socialArray = [
    new social(
      ' <i class="fab fa-facebook-messenger user--icon"></i>',
      "message",
      "#9B59B6",
      "https://m.facebook.com/teee.dunn"
    ),
    new social(
      ' <i class="fab fa-instagram user--icon"></i> ',
      "instagram",
      "#E74C3C",
      "https://www.instagram.com/teee.dunn/"
    ),
    new social(
      ' <i class="fab fa-twitter-square"></i> ',
      "twitter",
      "#3498DB",
      "https://twitter.com/?lang=vi"
    ),
  ];
  socialArray.forEach((sog) => {
    contentSocial.innerHTML += `<div style='background-color:${sog.color}' onclick="window.location.href = '${sog.link}'" class="social-name">
      ${sog.log}
      <p>${sog.name}</p>
    </div>`;
  });
}
/* render news */

function newsRender() {
  class newsContent {
    constructor(heading, subHeading, img) {
      (this.heading = heading),
        (this.subHeading = subHeading),
        (this.img = img);
    }
  }
  let newsArray = [
    new newsContent(
      "Lê Thế Dũng",
      "Chào các bạn, mình là Hà Thị Chung, học sinh lớp 6A, trường THCS (tên trường). Gia đình mình có năm người. Bố mình là Hà Huy Hoàng, bố làm kỹ sư xây dựng. Ngôi nhà cả gia đình mình đang sống chính là do bố thiết kế. Mẹ mình là Nguyễn Thị Hoa là một giáo viên tiểu học",
      "./assets/imgs/image2.jpg"
    ),
    new newsContent(
      "đoạn văn mẫu số 2",
      "Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn quen gọi em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là còi cọc của em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được",
      "./assets/imgs/image3.jpg"
    ),
    new newsContent(
      "đoạn văn mẫu số 3",
      "Tôi tên là Đỗ Tuấn Anh. Năm nay, tôi bảy tuổi. Hiện tại, tôi đang là học sinh lớp 6A6. Gia đình của tôi có bốn thành viên là bố, mẹ, tôi và em gái. Tôi rất yêu quý mọi người trong gia đình của mình. Sở thích của tôi là chơi game, đá bóng và đọc sách. Môn học mà tôi giỏi nhất là môn Toán",
      "./assets/imgs/image.jpg"
    ),
  ];
  newsArray.forEach((ne) => {
    newsContents.innerHTML += ` <div class="new-info">
      <img src=" ${ne.img}" alt="">
      <div class="new-container">
        <h1>${ne.heading}</h1>
        <p> ${ne.subHeading} </p>
      </div>`;
  });
}
/* project effect */

function projectEffect() {
  var projectBtn = $$(".project-content");
  var projectSub = $$(".project-sub");
  var heightSubProject = 600;
  var heightNoClick = projectSub[0].clientHeight;
  projectBtn.forEach((btn, index) => {
    btn.onclick = function () {
      let heightDefulSubProject = projectSub[index].clientHeight;
      if (heightDefulSubProject < heightSubProject) {
        projectSub[index].classList.add("project--sub-full");
        for (var i = 0; i <= heightSubProject; i++) {
          projectSub[index].style.height = i + "px";
        }
      } else {
        for (let x = heightDefulSubProject; x >= heightNoClick; x--) {
          projectSub[index].style.height = x + "px";
        }
        projectSub[index].classList.remove("project--sub-full");
      }
    };
  });
}
projectRender();
function projectRender() {
  class coder {
    constructor(title, codeHeader, codeSub, codeImg, icon) {
      (this.title = title),
        (this.codeHeader = codeHeader),
        (this.codeSub = codeSub),
        (this.codeImg = codeImg),
        (this.icon = icon);
    }
  }
  var codeArray = [
    new coder(
      "love",
      "love project",
      "this is heading",
      "./assets/imgs/image.jpg",
      '<i class="fas fa-heart code--icon" style="color: pink;"></i>'
    ),
    new coder(
      "love story",
      "this is heading",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste autem vitae dolor numquam quis doloremque laudantium officia! Ipsa, nostrum nobis itaque iusto quidem quis omnis minima assumenda quo quae iste.",
      "./assets/imgs/image2.jpg",
      '<i class="fas fa-history code--icon" style="color: #F1C40F"></i>'
    ),
    new coder(
      "my life",
      "this is my life",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste autem vitae dolor numquam quis doloremque laudantium officia! Ipsa, nostrum nobis itaque iusto quidem quis omnis minima assumenda quo quae iste.",
      "./assets/imgs/image3.jpg",
      '<i class="fas fa-location-arrow code--icon" style="color: #ECF0F1;"></i></i>'
    ),
    new coder(
      "my crush",
      "a little about my crush",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste autem vitae dolor numquam quis doloremque laudantium officia! Ipsa, nostrum nobis itaque iusto quidem quis omnis minima assumenda quo quae iste.",
      "./assets/imgs/image.jpg",
      '<i class="fas fa-hand-holding-heart code--icon" style="color: #C0392B;"></i>'
    ),
  ];
  var html = codeArray.map((code) => {
    return `<li class="project-in-code">
      <div class="project-content">
         <p> ${code.icon} ${code.title}
   <div class="code-nav">
     <i class="fas fa-angle-down nav-down"></i>
     <i class="fas fa-angle-up nav-up hidden"></i>
   </div>
      </div>
      <ul class="project-sub ">
        <li>
          <img src="${code.codeImg}" alt="">
          <h2>${code.codeHeader}</h2>
          <p>${code.codeSub}</p>
        </li>
      </ul>
    </li>`;
  });
  codeProject.innerHTML = html.join("");
  projectEffect();
}
