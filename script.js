// Post image layout
const postImages = document.querySelectorAll('#postImage');

if (postImages.length >= 2) {
    postImages.forEach(postImage => {
        postImage.style.width = '50%';
    });
}
