const parallax = (elem, distance, speed) => {
  const item = document.querySelector(elem);
  item.style.transform = `translateY(${distance * speed}px)`;
};

window.addEventListener("scroll", () => {
  parallax(".container", window.scrollY, 0.5);
  parallax(".bird", window.scrollY, 0.4);
});