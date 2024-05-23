// JavaScript using anime.js
document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".grid-item",
    translateX: [-1000, 0], // Animate from -1000px to 0px on X-axis
    width: ["0%", "100%"], 
    opacity: [0,1], 
    delay: anime.stagger(100), // Add stagger delay for each grid item
    duration: 1000, 
    easing: "easeInOutSine" 
  });
});
