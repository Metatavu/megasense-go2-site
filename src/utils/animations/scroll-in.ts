/**
 * Script that detects how much of an element is visible on screen and changes its opacity and position accordingly.
 */
const scrollInDetector = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      const htmlElement = document.getElementById(element.target.id);
      if (!htmlElement) return;

      htmlElement.style.setProperty("opacity", element.intersectionRatio.toString());
      htmlElement.style.setProperty("transform", `translate3d(0, ${32 - element.intersectionRatio * 32}px, 0)`);
    }
  });
}, {
  rootMargin: "0px",
  threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
});

const scrollInElements = [...document.querySelectorAll("*[data-scroll-in]").values()];

if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === false) {
  scrollInElements.forEach((element) => scrollInDetector.observe(element));
}