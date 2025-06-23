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