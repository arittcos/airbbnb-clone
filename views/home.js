let menuOpen = document.getElementById("menuOpen");
let menuOption = document.getElementById("menuOption");
let loginTab = document.getElementById("loginMenuOp");
let loginOpen = document.getElementById("loginOrSignupWrap");
let formClose = document.getElementById("formClose");
let ntClickedSearch = document.getElementById("ntClickedSearch");
let clickedSearch = document.getElementById("clickedSearch");
let loginContinueBtn = document.getElementById("loginContinueBtn");
let homeLogin = document.getElementById("homeLogin");
let logout = document.getElementById("logoutMenu");

menuOpen.addEventListener("click", () => {
  if (menuOption.classList.contains("dispNon")) {
    menuOption.classList.remove("dispNon");
    menuOption.classList.add("dispblk");
  } else if (menuOption.classList.contains("dispblk")) {
    menuOption.classList.remove("dispblk");
    menuOption.classList.add("dispNon");
  }
});

loginTab.addEventListener("click", () => {
  loginOpen.style.display = "flex";
  document.body.style.overflow = "hidden";
});

formClose.addEventListener("click", () => {
  loginOpen.style.display = "none";
  document.body.style.overflow = "auto";
});

ntClickedSearch.addEventListener("click", () => {
  ntClickedSearch.style.display = "none";
  clickedSearch.style.display = "flex";
});

loginContinueBtn.addEventListener("click", () => {
  homeLogin.submit();
});
