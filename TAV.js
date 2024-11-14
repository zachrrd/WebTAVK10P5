document.getElementById("show-more").addEventListener("click", function() {
    const moreContent = document.getElementById("more-content");
    const showMoreButton = document.getElementById("show-more");

    // Toggle display of more content and button text
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        showMoreButton.textContent = "Show Less";

        // Scroll to the bottom of the content smoothly after it's displayed
        setTimeout(() => {
            showMoreButton.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
    } else {
        moreContent.style.display = "none";
        showMoreButton.textContent = "Show More";
        
        // Scroll back to the top of the button smoothly when collapsed
        showMoreButton.scrollIntoView({ behavior: "smooth" });
    }
});