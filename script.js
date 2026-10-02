const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const closeBtn2 = document.getElementById("closeBtn2");
const loveBtn = document.getElementById("loveBtn");
const hearts = document.querySelector(".hearts");

function openModal() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  burstHearts(18);
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

loveBtn.addEventListener("click", () => {
  burstHearts(55);
  loveBtn.textContent = "Okay, you are officially very loved 💗";
  setTimeout(() => {
    loveBtn.textContent = "Press for a little magic ✨";
  }, 3000);
});

function burstHearts(count) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("span");
    h.className = "float-heart";
    h.textContent = ["♥", "♡", "💗", "💕", "✨"][Math.floor(Math.random() * 5)];
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = (12 + Math.random() * 25) + "px";
    h.style.animationDuration = (2.5 + Math.random() * 3.5) + "s";
    h.style.animationDelay = (Math.random() * .8) + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 6500);
  }
}

// A gentle background sprinkle of hearts.
setInterval(() => burstHearts(1), 1600);
