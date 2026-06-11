const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    toggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
  }
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
