window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is loaded and ready!');
});

function changeImage(imageName) {
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = `../images/${imageName}`;
}