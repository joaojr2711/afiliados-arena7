document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menu-icon");
  var mobileMenu = document.querySelector(".mobile-menu");

  menuIcon.addEventListener("click", function () {
    mobileMenu.classList.toggle("open"); // Alternar a classe 'open' no menu móvel
  });
});

window.addEventListener("load", function () {
  const carouselContainer = document.querySelector(".carousel-depositions");
  const carouselItems = carouselContainer.querySelectorAll(".carousel-item");
  const clonedItems = Array.from(carouselItems).map((item) =>
    item.cloneNode(true)
  );
  clonedItems.forEach((item) => carouselContainer.appendChild(item));
  const itemWidth = carouselContainer.firstElementChild.offsetWidth;
  const interval = 3000;
  let position = 0;
  function moveCarousel() {
    position -= itemWidth;
    carouselContainer.style.transition = "transform 0.5s ease-in-out";
    carouselContainer.style.transform = `translateX(${position}px)`;
    if (position === -carouselItems.length * itemWidth) {
      setTimeout(() => {
        carouselContainer.style.transition = "none";
        carouselContainer.style.transform = `translateX(0)`;
        position = 0;
      }, 500);
    }
  }
  setInterval(moveCarousel, interval);
});
