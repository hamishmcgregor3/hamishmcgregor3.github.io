// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create the fade-in animations
  anime({
    targets: ".title-1",
    opacity: 1,
    duration: 2500, // Duration in milliseconds
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".title-2",
    opacity: 1,
    duration: 3500, // Duration in milliseconds
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".couch-scene",
    opacity: 1,
    duration: 2000, // Duration in milliseconds
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".circle-pattern",
    opacity: 0.3,
    duration: 4000, // Duration in milliseconds
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".lamp-container",
    translateY: [-500, 0], // Animate from -1000px to 0px on X-axis
    translateX: ['-50%', '-50%'], // Horizontally center the element
    // opacity: [0,1], 
    duration: 1000, // Duration of animation
    easing: "easeInOutSine", // Easing function
  });

  anime({
    targets: ".subtitle-wrapper",
    opacity: 1,
    duration: 2000, // Duration in milliseconds
    easing: "easeInOutQuad",
  });

  document
    .getElementById("lamp-img-mobile")
    .addEventListener("click", function (event) {
      
      event.preventDefault(); // Prevent the default link navigation
      const lampImg = document.getElementById("lamp-img-mobile");
      const images = ["/images/click_here_mobile.png", "/images/click_here_mobile_hover.png"];

      function toggleImageSrc(img) {
        const currentSrc = img.src.split("/").pop();
        if (currentSrc === images[0].split("/").pop()) {
          return images[1];
        } else {
          return images[0];
        }
      }

      let intervalDuration = 400; // Start with a 1-second interval
      const totalDuration = 1500; // Total duration of 4 seconds
      const intervalDecrement = 100; // Decrease interval by 100ms each time
      const minIntervalDuration = 100; // Minimum interval duration of 100ms

      let elapsedTime = 0;

      function flicker() {
        if (elapsedTime >= totalDuration) {
          // Set the image source to _hover
          lampImg.src = images[1];
          // Navigate to the next page
          setTimeout(function () {
            window.location.href = "/pages/navigation.html";
          }, 300);
          return;
        }

        // Toggle the image source
        lampImg.src = toggleImageSrc(lampImg);
        elapsedTime += intervalDuration;

        // Decrease the interval duration to increase speed
        intervalDuration = Math.max(
          minIntervalDuration,
          intervalDuration - intervalDecrement
        );

        setTimeout(flicker, intervalDuration);
      }

      // Start the flickering effect
      flicker();
    });
});
