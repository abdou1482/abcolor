const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.nav-links');

  console.log(menu); // Check if menu element is selected
  console.log(menuLinks); // Check if nav-links element is selected

  if (menu && menuLinks) {
      menu.addEventListener('click', () => {
          menuLinks.classList.toggle('active');
          console.log('Menu clicked, toggling active class'); // Debugging log
      });
  } else {
      console.error('Menu or nav-links element not found');
  }
});
