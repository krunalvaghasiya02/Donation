
function showmenu() {
  let menu = document.getElementById("menu")
  let blackshadow = document.getElementById("blackshadow")
  blackshadow.style.cssText = `
  transform: translateX(0%);
   transition: 0.3s;
  `;
  menu.classList.add("show")
}
function closemenu() {
  let menu = document.getElementById("menu")
  menu.classList.remove("show")
  blackshadow.style.cssText = `
  transform: translateX(100%);
   transition: 0.3s;
  `;
}
