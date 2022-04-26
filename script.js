const scrollOffset = 100;
const numImg = 6;

const windowHeight = document.getElementById("window-height");
const offsetTop = document.getElementById("offset-top");
const scrollElement = document.querySelector(".js-scroll");
const instructions = document.getElementById("instructions");
const bodyd = document.getElementById("bodyd");

const getWindowHeight = () => {
  windowHeight.innerHTML =
    window.innerHeight || document.documentElement.clientHeight;
};

const getOffsetTop = () => {
  var dod = scrollElement.getBoundingClientRect().top;
  var ddod = document.documentElement.clientHeight;
  var ddd = dod / ddod * numImg;
  ddd = parseInt(ddd, 10);

  idm = "url(img/" + (ddd + 1) + ".png)";
  offsetTop.innerHTML = idm;
  bodyd.style.backgroundImage = (idm);
}

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}

const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement(scrollElement);

  } else {
    hideScrollElement(scrollElement);
  }
}

getWindowHeight();
getOffsetTop()

window.addEventListener('resize', () => {
  getWindowHeight()
})

window.addEventListener('scroll', () => {
  getOffsetTop();
  handleScrollAnimation();
})
