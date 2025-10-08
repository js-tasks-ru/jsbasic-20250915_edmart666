function initCarousel() {
  // ваш код...
  let slides = document.querySelectorAll(".carousel__slide");

  let mainBanner = document.body.querySelector(".carousel__inner");
  let arrowRight = document.body.querySelector(".carousel__arrow_right");
  let arrowLeft = document.body.querySelector(".carousel__arrow_left");
  let widthBanner = mainBanner.offsetWidth;

  let finalSlide = slides.length;
  let index = 0;

  arrowLeft.style.display = "none";

  arrowRight.onclick = () => {
    arrowLeft.style.display = "";
    index++;
    mainBanner.style.transform = `translateX(-${widthBanner * index}px)`;

    if (index === finalSlide - 1) {
      arrowRight.style.display = "none";
    }
  };

  arrowLeft.onclick = () => {
    index--;
    mainBanner.style.transform = `translateX(-${widthBanner * index}px)`;

    if (index === 0) {
      arrowLeft.style.display = "none";
      arrowRight.style.display = "";
    }
  };
}
