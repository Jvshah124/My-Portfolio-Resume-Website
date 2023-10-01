// -------------Croll Animator JS----------------

// Get the progress bar element
const progressBar = document.querySelector(".progress");

// Calculate the maximum scroll height (total page height - viewport height)
const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

// Listen for the scroll event
window.addEventListener("scroll", () => {
  // Calculate the current scroll position as a percentage of the maximum scroll height
  const scrollPercentage = (window.scrollY / maxScrollHeight) * 100;

  // Update the width of the progress bar based on the scroll percentage
  progressBar.style.width = scrollPercentage + "%";
});

// ----------------SCROLL END----------------------------------

// -----------------Collapsing navbar JS---------------------------
function toggleNav() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

// ------------------------Collapsing end--------------------------

const sr = ScrollReveal({
  origin: "top", // Animation starting point (you can use 'left', 'right', 'top', or 'bottom')
  distance: "75px", // Distance the element moves during the animation
  duration: 2000, // Animation duration in milliseconds
  reset: true, // Reset the animation when it's not in the viewport
});

// Define the elements you want to animate
sr.reveal(".content > h4", { delay: 300 });
sr.reveal(".content > h1", { delay: 400 });
sr.reveal(".content > h3", { delay: 300 });

sr.reveal(".my-logo", { delay: 400 });
sr.reveal("#about-texth2", { delay: 300 });
sr.reveal("#about-texth5", { delay: 250 });
sr.reveal("#about-textp", { delay: 200 });

sr.reveal(".title", { delay: 300 });
sr.reveal(".card", { delay: 400 });
sr.reveal(".projects", { delay: 400 });
sr.reveal(".image-item", { delay: 450 });
sr.reveal("#toggleBtn", { delay: 300 });
// sr.reveal("#mail", { delay: 300 });
// sr.reveal("#mail-btn", { delay: 300 });
sr.reveal(".contact-form", { delay: 350 });
sr.reveal(".contact-info", { delay: 350 });

// sr.reveal(".copyright p ", { delay: 250 });

// document.addEventListener("DOMContentLoaded", () => {
//   sr.reveal(""); // Trigger the animations when the page loads
// });

// My socials -----------------

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const text = document.querySelector(".social-text");

  let isOpen = false;

  toggleBtn.addEventListener("click", function () {
    if (isOpen) {
      text.style.maxHeight = "0";
    } else {
      text.style.maxHeight = text.scrollHeight + "px";
    }

    isOpen = !isOpen;
  });
});

// --------------JS for image slider-------------

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btnn");
let currentSlide = 1;

// ---------JS for manual navigation--------

var manualNav = function (manual) {
  slides.forEach((slide) => {
    slides.classList.remove("active");
    btns.forEach((btnn) => {
      btnn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btnn, i) => {
  btnn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// ----------JS for Autoplay Slider----------

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }

      if (i >= slides.length) {
        return;
      }

      repeater();
    }, 4000);
  };

  repeater();
};

repeat();
