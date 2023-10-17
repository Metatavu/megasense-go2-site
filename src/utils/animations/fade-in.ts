// TODO: This only seems to work on the initially loaded page and after refresh, not after navigation.
/**
 * Script that detects when an element is completely visible on screen and changes its opacity and position accordingly.
 */
const fadeInDetector = new IntersectionObserver((elements, observer) => {
  elements.forEach((entry) => {
    const htmlElement = entry.target as HTMLElement;

    if (entry.intersectionRatio === 1) {
      htmlElement.style.setProperty("opacity", "1");
      htmlElement.style.setProperty("transform", "translate3d(0px, 0px, 0px)");
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  rootMargin: "-15% 0px -15% 0px",
  threshold: [0, 1],
});

const fadeInElements = [...document.querySelectorAll("[data-fade-in]").values()];

if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === false) {
  fadeInElements.forEach((element) => fadeInDetector.observe(element));
}