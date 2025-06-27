const ratings = document.querySelectorAll('.rating');
 ratings.forEach(rating => {
    
    const score = parseFloat(rating.textContent);

    rating.classList.remove('high-rating', 'medium-rating', 'low-rating');

    if (score > 7) {
      rating.classList.add('high-rating');
    } else if (score >= 5) {
      rating.classList.add('medium-rating');
    } else {
      rating.classList.add('low-rating');
    }
  });

  const input = document.getElementById("searchInput");
const cards = document.querySelectorAll(".anime");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});