const fetchImagePaths = async (folderPath) => {
    // Here we're using a JSON file to simulate fetching from the server
    const response = await fetch(folderPath);
    const imagePaths = await response.json();
    return imagePaths;
};

const createImageGrid = async (elementId, folderPath) => {
    const container = document.getElementById(elementId);
    if (!container) {
        console.error(`Element with id ${elementId} not found.`);
        return;
    }

    const imagePaths = await fetchImagePaths(folderPath);
    imagePaths.forEach(path => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'image-container';

        const img = document.createElement('img');
        img.src = path;
        img.loading = 'lazy';

        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
    });
};