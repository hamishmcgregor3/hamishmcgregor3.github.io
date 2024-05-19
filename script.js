document.addEventListener('DOMContentLoaded', function() {
    // Get the image element by id
    var couchImage = document.getElementById('lampImage');

    // Add a click event listener to the image
    couchImage.addEventListener('click', function() {
        // Redirect to the desired page
        window.location.href = '/pages/navigation.html'; // Replace with your target URL
    });
});