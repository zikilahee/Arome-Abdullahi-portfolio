// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

 const scrollTopBtn = document.getElementById("scrollTopBtn");
  
    // Show button when user scrolls 200px down
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    });
  
    // Scroll to top when clicked
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    // Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

reveals.forEach(reveal => observer.observe(reveal));

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("nav ul");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  if (navLinks.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});

// Icon pop-in animation
const icons = document.querySelectorAll(".icon-pop");

const iconObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      iconObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

icons.forEach(icon => iconObserver.observe(icon));


 