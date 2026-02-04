const galleryImages = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");
const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        modalImage.src = image.src;
        imageModal.show();
    });
});
