const accordions = document.querySelectorAll('.list-item'); 

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
      const content = accordion.querySelector(`.list-content`);
      content.classList.toggle(`active`);
    });
  });
  