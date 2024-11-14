document.addEventListener("DOMContentLoaded", function() {
    const fadeInImage = document.querySelectorAll(".opening-img");
    fadeInImage.forEach((img) => {
        img.classList.add("show");
    });
});
