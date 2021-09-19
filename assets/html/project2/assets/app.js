/* khai bao bien cuc bo*/
const headerBtn = document.querySelectorAll(".header__container-logo");
const squareInfoContainer = document.querySelector(".square__info-container");
const squareContent = document.querySelector(".square");
const profileContent = document.querySelector(".profile");
const messContent = document.querySelector(".mess");
const main = document.querySelector(".main");
const mainSon = document.querySelectorAll('.main > *')
const transMain = screen.width;
const profilePersonal = document.querySelector('.profile-person');
console.log(mainSon)
mainSon.forEach(
  (son) => {
    son.style.width = transMain + 'px';
  }
)
main.style.width = transMain * mainSon.length + "px";
main.style.transform = `translateX( -${transMain}px )`;
const profileGalleryContainer = document.querySelector('.profile__gallery-container')
const app = {
  chat: function() {
    main.style.transform = `translateX( 0px )`;
    
  },
  square: function() {
    main.style.transform = `translateX(-${screen.width}px)`
  },
  profilesss: function() {
    console.log('hello')
    main.style.transform = `translateX(-${screen.width*2}px)`
  },
  headerRemoves: function () {
    headerBtn.forEach((btn) => {
      btn.classList.remove("header--active");
    });
  },
  headerAdd: function (index) {
    headerBtn[index].classList.add("header--active");
  },
  headerEvent: function () {
    headerBtn.forEach((btn, index) => {
      btn.onclick = function () {
        app.headerRemoves();
        app.headerAdd(index);
        switch (index) {
          case 0:
            app.chat()
            break;
          case 1:
            app.square() 

            break;
          case 2:
            app.profilesss()

            break;

          default:
            break;
        }
      };
    });
  },
  squareInfo: {
    user1: {
      infoImg:
        "https://i.pinimg.com/564x/b6/27/7d/b6277d38f84a4f57439b56850d474766.jpg",
      infoName: "lê thế dũng",
      infoTime: "2 min ago",
      infoAttention: 300,
      infoFollow:100,
      infoFollowing: 30,
      infoAge: 16,
      infoLever: 13,
      infoVip: 10,
      idProfile: "543654265",
      infoChat: "#",
      infoUser: '<i class="fas fa-mars male--icon"></i>'
    },
    user2: {
      infoImg:
        "https://i.pinimg.com/236x/7d/eb/e8/7debe8349d9614473e143c9f946c13c2.jpg",
      infoName: "hồ ngọc hà",
      infoTime: "2 min ago",
      infoAttention: 20,
      infoFollow:17,
      infoFollowing: 7,
      infoAge: 16,
      infoLever: 13,
      infoVip: 10,
      idProfile: "43264332432",
      infoChat: "#",
      infoUser: '<i class="fas fa-mars male--icon"></i>'

    },
    user3: {
      infoImg:
        "https://i.pinimg.com/236x/c0/06/bb/c006bb7d089785ed4f71896032e04dfb.jpg",
      infoName: "maria ozawoa",
      infoTime: "2 min ago",
      infoAttention: 245,
      infoFollow:21,
      infoFollowing: 232,
      infoAge: 16,
      infoLever: 13,
      infoVip: 10,
      idProfile: "54365644324",
      infoChat: "#",
      infoUser: '<i class="fas fa-mars male--icon"></i>'

    },
    user4: {
      infoImg:
        "https://i.pinimg.com/236x/ce/6e/75/ce6e7522e9bf5c5896dccdd08acb2a2c.jpg",
      infoName: "tokuda",
      infoTime: "2 min ago",
      infoAttention: 88,
      infoFollow:44,
      infoFollowing: 534,
      infoAge: 80,
      infoLever: 13,
      infoVip: 99,
          idProfile: "654834644",
      infoChat: "#",
      infoUser: '<i class="fas fa-venus female--icon"></i>'
    },
    user5: {
      infoImg:
        "https://i.pinimg.com/236x/b2/42/74/b24274ea8df83f93fd5fbaae0e5f57d9.jpg",
      infoName: "dũng lê thế",
      infoTime: "2 min ago",
      infoAttention: 5,
      infoFollow:5,
      infoFollowing: 4,
      infoAge: 18,
      infoLever: 13,
      infoVip: "pro",
            idProfile: "53875935665",
      infoChat: "#",
      infoUser: '<i class="fas fa-venus female--icon"></i>'

    },
  },
  squareInfoRender: function () {
    const indexGetUser = 1;
    const infoArray = Object.entries(this.squareInfo);
    const listUser = infoArray.map((info) => {
      return `<div class="square__info add-trans">
        <div class="square__info-img">
            <img src=" ${info[indexGetUser].infoImg} " alt="">
        </div>
        <div class="square__info-user">
            <div class="square__info-name">
                <h2>${info[indexGetUser].infoName}</h2>
            <p>2 min ago</p>
        </div>
        <div class="square__info-tag">
            <span>${info[indexGetUser].infoUser} ${info[indexGetUser].infoAge}</span>
            <span>lv.${info[indexGetUser].infoLever}</span>
            <span>vip${info[indexGetUser].infoVip}</span>
        </div>
        <div class="square__info-friend">
            <button class="square__add-fr add-trans">messager</button>
            <button class="square__add-fr add-trans">views profile</button>
        </div>
    </div>
    </div>`;
    });
    squareInfoContainer.innerHTML = listUser.join("");
    const squareItem = document.querySelectorAll(".square__info");
    (squareInfoContainer.style.width =
      squareItem[0].clientWidth * listUser.length + "px"),
      app.squareEvent(squareItem);
      const profilepersons = document.querySelectorAll('.square__info-friend button:nth-child(2)');
      this.profileperson(profilepersons,infoArray)
  },
  profileperson: function(profilepersons,infoArray) {
    const personBack = document.querySelector('.profile-person-btn');
    const personImg = document.querySelector('.js--person-avt img');
    const personName = document.querySelector('.js--person-info h2');
    const personAge = document.querySelector('.js--person-info h2 span');
    const personId = document.querySelector('.js--person-info > span');
    const personInteract = document.querySelectorAll('.js--person-interact h2')
console.log(personInteract)
    //----------
    personBack.onclick = function() {
      squareContent.style.order = 2;
        profilePersonal.style.order = 4;
    }
    profilepersons.forEach(
      (person,index) => {
       person.onclick = function() {
        squareContent.style.order = 4;
        profilePersonal.style.order = 2;
       const infoPersonal = infoArray[index][1];
       personImg.src = infoPersonal.infoImg;
       personName.innerHTML = infoPersonal.infoName + `<span> ${infoPersonal.infoUser +infoPersonal.infoAge} </span>`;
       personId.innerText = `ID: ${infoPersonal.idProfile}`
       personInteract[0].innerText = infoPersonal.infoAttention;
       personInteract[1].innerText = infoPersonal.infoFollow;
       personInteract[2].innerText = infoPersonal.infoFollowing;
       //---------
       }
      }
    )
  },
  getRectLeftRight: function (element) {
    return {
      left: element.getClientRects()[0].left,
      right: element.getClientRects()[0].right,
      width: element.getClientRects()[0].width,
    };
  },
  slider: function (
    elementSlider,
    leftBtn,
    rightBtn,
    squareItem,
    indexElement = 0
  ) {
    var index = 0;
    const rect = app.getRectLeftRight(elementSlider);
    const leftDeaful = rect.left;
    const rightDeaful = rect.right;
    leftBtn.onclick = function () {
      if (index > 0) {
        index--;
      }
      const rect = app.getRectLeftRight(elementSlider);
      if (rect.left >= 0) {
        elementSlider.style.transform = `translateX(0%)`;
        return (indexElement = 0);
      }
      indexElement += squareItem[0].clientWidth;
      elementSlider.style.transform = `translateX( ${indexElement}px)`;
    };
    rightBtn.onclick = function () {
      if (index < squareItem.length - 1) {
        const rect = app.getRectLeftRight(elementSlider);
        if (rect.right < screen.width) {
          indexElement = 0;
          elementSlider.style.transform = `translateX( ${indexElement}px)`;
          index = 0;
          return;
        }
        indexElement -= squareItem[0].clientWidth;
        elementSlider.style.transform = `translateX( ${indexElement}px)`;
        index++;
      } else {
        indexElement = 0;
        elementSlider.style.transform = `translateX( ${indexElement}px)`;
        index = 0;
      }
    };
  },
  squareEvent: function (squareItem) {
    const squareInfoItems = document.querySelectorAll(".square__info");
    const squareLeft = document.querySelector(".square--left");
    const squareRight = document.querySelector(".square--right");
    app.slider(squareInfoContainer, squareLeft, squareRight, squareItem);
  },
  profileGallery: [
    "https://i.pinimg.com/236x/c4/74/a4/c474a4f400a47db509e509e80e279094.jpg",
    "https://i.pinimg.com/236x/dc/f9/7a/dcf97aacbd373e463cfb939793d5cdd3.jpg",
    "https://i.pinimg.com/236x/05/ee/50/05ee509d275b8b37ae59db6d2c5a31cc.jpg",
    "https://i.pinimg.com/236x/bc/0c/61/bc0c61ef96f5afed17b11b6f8ac40467.jpg" 
  ],
  profileGalleryRender: function() {
    const galleryheader = document.querySelector('.profile__gallery-header h2');
    galleryheader.innerText += `(${this.profileGallery.length})`
    const galleryImgs = document.querySelectorAll('.gallery__img');
    const galleryImgsWidth = galleryImgs[0].clientWidth;
    profileGalleryContainer.style.width = galleryImgsWidth * app.profileGallery.length + 'px';
    html = this.profileGallery.map(
      (img) => {
        return `<div class="gallery__img">
        <img src="${img}" alt="">
      </div>`
      }
    )
    profileGalleryContainer.innerHTML = html.join();
  },
  profile: function () {},
  start: function () {
    this.headerEvent();
    this.squareInfoRender();
    this.profile();
    this.profileGalleryRender()
  },
};

app.start();
