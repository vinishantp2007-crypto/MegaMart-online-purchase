function goCategory(name) {
  window.location.href = "category.html?name=" + name;
}

function viewAll(type) {
  alert("Viewing all " + type);
}

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index = (index + 1) % slide.length;
  showSlide();
});

prev.addEventListener("click", () => {
  index = (index - 1 + slide.length) % slide.length;
  showSlide();
});

/* Auto slide */
setInterval(() => {
  index = (index + 1) % slide.length;
  showSlide();
}, 4000);