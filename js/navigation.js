// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".section-toggle-about",
    opacity: 1,
    duration: 1000, // Duration in milliseconds
    easing: "easeInOutQuad",
  });

  // Create the fade-in animation
  //   anime({
  //     targets: ".grid-item about-row",
  //     duration: 1000, // Duration in milliseconds
  //     backgroundColor: "#FFFF33",
  //     easing: "easeInOutQuad",
  //   });
});
