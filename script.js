// =============================
// KRISHNA MOBILE
// SMOOTH ANIMATION SYSTEM
// =============================

// Mobile Menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}


// Close mobile menu after clicking a link

document.querySelectorAll("#mobileMenu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("mobileMenu").style.display = "none";
  });
});


// Scroll Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  function(entries) {

    entries.forEach(function(entry) {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.12
  }
);

sections.forEach(function(section) {
  observer.observe(section);
});


// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// Add page loaded class

window.addEventListener("load", function() {
  document.body.classList.add("loaded");
});


// Button click effect

document.querySelectorAll(".btn, .product-btn, .whatsapp").forEach(function(button) {

  button.addEventListener("click", function() {

    this.style.transform = "scale(0.96)";

    setTimeout(() => {
      this.style.transform = "";
    }, 150);

  });

});
