const headerTitle = document.querySelectorAll(".title__sub");
const icons = document.querySelectorAll(".navbar__list i");
const contentTitle = document.querySelector(".content__title");
const contentAbout = document.querySelector(".content__about");
const contentStudy = document.querySelector(".content__resume");
const contentBlog = document.querySelector(".content__blog");
const contentChild = document.querySelectorAll(".content > *");

setInterval(() => {
  headerTitle.forEach((item) => {
    item.classList.toggle("active--title");
  });
}, 2500);
function addActive(name, contentChild) {
  contentChild.forEach((content) => {
    if (content.classList.contains("active--left")) {
      content.classList.remove("active--left");
    }
  });
  name.classList.add("active--left");
}
function addColor(value, arrayIcons) {
  const iconColorName = "add--icon-color";
  arrayIcons.forEach((icon) => {
    if (icon.classList.contains(iconColorName)) {
      icon.classList.remove(iconColorName);
    }
  });
  let iconAddColor = document.querySelector(`[value=${value}]`);
  iconAddColor.classList.add(iconColorName);
}
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let iconValue = icon.getAttribute("value");
    switch (iconValue) {
      case "home":
        addActive(contentTitle, contentChild);
        addColor(iconValue, icons);
        break;
      case "about":
        addActive(contentAbout, contentChild);
        addColor(iconValue, icons);
        break;
      case "study":
        addActive(contentStudy, contentChild);
        addColor(iconValue, icons);

        break;
      case "blog":
        addActive(contentBlog, contentChild);
        addColor(iconValue, icons);
        break;
      default:
        break;
    }
  });
});

function headerShow(data) {
  const headerContent = document.querySelector(`.${data.content}`);
  const headerBtn = document.querySelector(`.${data.btnIcon}`);
  const headerBtnItems = document.querySelectorAll(`.${data.btnIconItems}`);
  headerBtn.onclick = function () {
    headerContent.classList.toggle(data.contentAtv);
    headerBtnItems.forEach((item) => {
      if (item.classList.contains(data.btnAtv)) {
        item.classList.remove(data.btnAtv);
      } else item.classList.add(data.btnAtv);
    });
  };
}
headerShow({
  contentAtv: "header--acvite",
  btnAtv: "dir-btn--active",
  content: "header",
  btnIcon: "dir__icon",
  btnIconItems: "dir__icon > i",
});
headerShow({
  contentAtv: "navbar--active",
  btnAtv: "dir-btn--active",
  content: "navbar",
  btnIcon: "navbar__dir",
  btnIconItems: "navbar__dir > i",
})

const sliderContainer = document.querySelector('.mb--about__cmt-contents')
setInterval( () => {
  sliderContainer.classList.toggle('add--left-about__cmt')
}, 5000)