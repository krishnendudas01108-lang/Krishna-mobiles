function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.querySelectorAll("#mobileMenu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("mobileMenu").style.display = "none";
  });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(function(section) {
  observer.observe(section);
});
