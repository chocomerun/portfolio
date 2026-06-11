const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.toggle("is-active");
    button.textContent = isActive ? "♥" : "♡";
    button.setAttribute("aria-label", isActive ? "お気に入りから削除" : "お気に入りに追加");
  });
});

document.querySelector(".menu-button")?.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
