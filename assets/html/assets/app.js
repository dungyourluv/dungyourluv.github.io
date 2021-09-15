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
/* get social */
var contentSocial = $(".user-social");
/* get user */
var userIcon = $(".icon--user");
var user = $(".user");
/* get music */
var musicIcon = $('.icon--music');
var music = $('.music')
/* get news */
var newsIcon = $('.icon--more')
var news = $('.news')
var newsContents = $('.news-content')



/* ham chay */
function start() {
  headerEvent();
  homeRender();
  socialRender();
  newsRender()
}
start();

/* xu ly su kien header */
isClick = false;
function homeShow() {//home show
  home.classList.remove("hidden");
  home.classList.add("active");
}
function homeHidden() {//home hidden
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
      musicHidden()
      navHidden()
      newsHidden()
    } else {
      navShow()
    }
    e.stopPropagation();
  };
  //user click
  function userShow() {//user show
    user.classList.remove("hidden");
    user.classList.add("active");
  }
  function userHidden() {// user hidden
    user.classList.remove("active");
    user.classList.add("hidden");
  }
  userIcon.onclick = function () {
    homeHidden();
    musicHidden()
    userShow();
    navHidden()
    newsHidden()

  };
  // music click
  function musicShow() {// music show
    music.classList.remove("hidden");
    music.classList.add("active");
  }
  function musicHidden() {// music hidden
    music.classList.remove("active");
    music.classList.add("hidden");
  }
  musicIcon.onclick = function() {
    musicShow();
    homeHidden();
    userHidden();
    navHidden()
    newsHidden()
  }
  //news
  function newsShow() {// music show
    news.classList.remove("hidden");
    news.classList.add("active");
  }
  function newsHidden() {// news hidden
    news.classList.remove("active");
    news.classList.add("hidden");
  }
  newsIcon.onclick = function() {
    musicHidden()
    homeHidden();
    userHidden();
    navHidden()
    newsShow()
  }
}

/* home render */
function homeRender() {
  let contentHome = {
    nameHome: "lê thế dũng",
    subName:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, ducimus numquam suscipit qui dolorem quas id laboriosam sed sint eveniet quaerat blanditiis voluptatem ab ipsa officiis. A minima perspiciatis minus.",
  };
  mainHome.innerHTML = `<h2 class="name">${contentHome.nameHome}</h2>
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
    constructor(logo, name, color) {
      (this.log = logo), (this.name = name), (this.color = color);
    }
  }
  let socialArray = [
    new social(
      ' <i class="fab fa-facebook-messenger user--icon"></i>',
      "message",
      "#9B59B6"
    ),
    new social(
      ' <i class="fab fa-instagram user--icon"></i> ',
      "instagram",
      "#E74C3C"
    ),
    new social(' <i class="fab fa-twitter-square"></i> ', "twitter", "#3498DB"),
  ];
  socialArray.forEach((sog) => {
    contentSocial.innerHTML += `<div style='background-color:${sog.color}' class="social-name">
      ${sog.log}
      <p>${sog.name}</p>
    </div>`;
  });
}
/* render news */

function newsRender() {
  class newsContent{
    constructor(heading, subHeading, img) {
      this.heading = heading,
      this.subHeading = subHeading,
      this.img = img
    }
  }
  let newsArray = [
    new newsContent('Lê Thế Dũng','Chào các bạn, mình là Hà Thị Chung, học sinh lớp 6A, trường THCS (tên trường). Gia đình mình có năm người. Bố mình là Hà Huy Hoàng, bố làm kỹ sư xây dựng. Ngôi nhà cả gia đình mình đang sống chính là do bố thiết kế. Mẹ mình là Nguyễn Thị Hoa là một giáo viên tiểu học', './assets/imgs/image2.jpg'),
    new newsContent('đoạn văn mẫu số 2','Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn quen gọi em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là còi cọc của em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được', './assets/imgs/image3.jpg'),
    new newsContent('đoạn văn mẫu số 3','Tôi tên là Đỗ Tuấn Anh. Năm nay, tôi bảy tuổi. Hiện tại, tôi đang là học sinh lớp 6A6. Gia đình của tôi có bốn thành viên là bố, mẹ, tôi và em gái. Tôi rất yêu quý mọi người trong gia đình của mình. Sở thích của tôi là chơi game, đá bóng và đọc sách. Môn học mà tôi giỏi nhất là môn Toán', './assets/imgs/image.jpg'),
  ]
  newsArray.forEach(
    (ne) => {
      newsContents.innerHTML += ` <div class="new-info">
      <img src=" ${ne.img}" alt="">
      <div class="new-container">
        <h1>${ne.heading}</h1>
        <p> ${ne.subHeading} </p>
      </div>`
    }
  )
}
