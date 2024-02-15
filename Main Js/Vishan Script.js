const iconBarsElem = document.querySelector(".fa-bars");
console.log("🚀  iconBarsElem:", iconBarsElem);
// const iconCloseElem = document.querySelector('.iconClose')
// console.log("🚀  iconCloseElem:", iconCloseElem);
const topMenuElem = document.querySelector(".top-menu");
console.log("🚀  topMenuElem:", topMenuElem);
function iconBarsHandler() {
  // console.log('ok iconBarsHandler');
  if (iconBarsElem.classList.contains("fa-bars")) {
    topMenuElem.style.left = 0 + "rem";
    // iconBarsElem.style.display = 'none'
    // iconCloseElem.style.display = 'block'
    iconBarsElem.classList = "fa fa-times";
  } else {
    topMenuElem.style.left = -13 + "rem";
    // iconBarsElem.style.display = 'block'
    // iconCloseElem.style.display = 'none'
    iconBarsElem.classList = "fa fa-bars";
  }
}
iconBarsElem.addEventListener("click", iconBarsHandler);
