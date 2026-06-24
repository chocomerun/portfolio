const setupSlider = (sliderSelector, cardSelector, prevSelector, nextSelector) => {
  const slider = document.querySelector(sliderSelector);
  const prevButton = document.querySelector(prevSelector);
  const nextButton = document.querySelector(nextSelector);

  if (!slider || !prevButton || !nextButton) {
    return;
  }

  const getSlideDistance = () => {
    const firstCard = slider.querySelector(cardSelector);
    if (!firstCard) {
      return slider.clientWidth;
    }

    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth - 1;

    prevButton.disabled = slider.scrollLeft <= 1;
    nextButton.disabled = slider.scrollLeft >= maxScrollLeft;
  };

  prevButton.addEventListener("click", () => {
    slider.scrollBy({
      left: -getSlideDistance(),
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    slider.scrollBy({
      left: getSlideDistance(),
      behavior: "smooth",
    });
  });

  slider.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
};

setupSlider(".work-grid", ".work-card", ".work-control-prev", ".work-control-next");
setupSlider(".banner-grid", ".banner-card", ".banner-control-prev", ".banner-control-next");
