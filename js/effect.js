// Get all certificate images
const certificates = document.querySelectorAll('.certificate');

// Get the lightbox and lightbox image elements
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');

// Add click event listener to each certificate image
certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        // Set the source of the lightbox image to the clicked certificate image
        lightboxImg.src = certificate.querySelector('img').src;
        // Show the lightbox
        lightbox.style.display = 'block';
    });
});

// Add click event listener to the close button
document.querySelector('.close-btn').addEventListener('click', () => {
    // Hide the lightbox
    lightbox.style.display = 'none';
});
CSS (Update)
Update the CSS for the .certificate.zoom class to ensure the cursor changes to a pointer on hover:

css
Salin kode
.certificate.zoom img {
    transform: scale(1.1); /* Increase the scale to zoom in */
    cursor: pointer; /* Change cursor to indicate clickable */
}