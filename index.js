document.querySelectorAll(".navigation__link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#nav-toggle").checked = false;
  });
});
