// Navbar shadow on scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});


// Smooth scroll for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Simple typing effect (Home section)
const text = "Web Developer";
let index = 0;

function typeEffect() {
  const element = document.querySelector("#home p");

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

// Clear text first then start typing
window.onload = function () {
  const element = document.querySelector("#home p");
  element.textContent = "";
  typeEffect();
};