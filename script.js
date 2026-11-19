const hero = document.getElementById("home");
const world = document.getElementById("world");

document.getElementById("enterButton").addEventListener("click", () => {
  hero.classList.add("hidden");
  world.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function showSection(id) {
  document.querySelector(".tiles").classList.add("hidden");
  document.querySelector(".world-header").classList.add("hidden");
  document.querySelectorAll(".content-card").forEach(card => card.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  document.querySelector(".tiles").classList.remove("hidden");
  document.querySelector(".world-header").classList.remove("hidden");
  document.querySelectorAll(".content-card").forEach(card => card.classList.add("hidden"));
  document.getElementById("surpriseMessage").textContent = "Your surprises are waiting...";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".tile").forEach(tile => {
  tile.addEventListener("click", () => showSection(tile.dataset.section));
});
document.querySelectorAll("[data-back]").forEach(button => button.addEventListener("click", showHome));
document.querySelectorAll(".surprise").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("surpriseMessage").textContent = button.dataset.message;
  });
});
