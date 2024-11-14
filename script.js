function toggleSubCards(subCardId) {
    const subCards = document.getElementById(subCardId);
    if (subCards.style.display === "flex") {
        subCards.style.display = "none";
    } else {
        subCards.style.display = "flex";
    }
}
