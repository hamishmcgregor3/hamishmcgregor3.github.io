document.addEventListener("DOMContentLoaded", () => {
  const imageGrid = document.getElementById("image-grid");

  const getImagePaths = () => {
    return [
      "/images/portfolio-content/graphic-design/image4.jpg",
      "/images/portfolio-content/graphic-design/image2.png",
      "/images/portfolio-content/graphic-design/image3.jpg"
    ];
  };

  const imagePaths = getImagePaths();

  imagePaths.forEach((imagePath, index) => {
    const container = document.createElement("div");

    // Create and append container number
    const containerNumber = document.createElement("div");
    containerNumber.classList.add("container-number");
    containerNumber.textContent = `${index + 1}.`;

    container.appendChild(containerNumber);

    container.classList.add("image-container");
    const img = document.createElement("img");
    img.src = `${imagePath}`;
    container.appendChild(img);

    imageGrid.appendChild(container);
  });
});
