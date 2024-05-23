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
        const img = document.createElement('img');
        img.src = path;
        img.loading = 'lazy';
        container.appendChild(img);
    });
};