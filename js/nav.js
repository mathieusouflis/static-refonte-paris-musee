const burgerTrigger = document.querySelector(".burger-menu");

let isNavOpen = false;

burgerTrigger.addEventListener("click", () => {
  console.log("Burger menu clicked");
  isNavOpen = !isNavOpen;

  if (isNavOpen) {
    document.querySelector(".nav-content").classList.add("nav-open");
    document.querySelector(".nav-content").classList.remove("nav-close");
  } else {
    document.querySelector(".nav-content").classList.add("nav-close");
    document.querySelector(".nav-content").classList.remove("nav-open");
  }
});
