// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create the fade-in animation
  anime({
    targets: ".title-1",
    opacity: 1,
    duration: 1000, // Duration in milliseconds
    easing: "easeInOutQuad"
  });
  
  anime({
    targets: ".title-2",
    opacity: 1,
    duration: 1000, // Duration in milliseconds
    easing: "easeInOutQuad"
  });
});
