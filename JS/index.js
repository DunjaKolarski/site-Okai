const toggleBtn = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

toggleBtn.addEventListener("click", () => {
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});