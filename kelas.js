
function toggleSubCards(subCardsId) {
  const subCards = document.getElementById(subCardsId);
  if (subCards.style.display === "flex") {
    subCards.style.display = "none";
  } else {
    subCards.style.display = "flex";
  }
}
function openModal() {
    document.getElementById("tableModal").style.display = "block";
}

function closeModal() {
    document.getElementById("tableModal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("tableModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
