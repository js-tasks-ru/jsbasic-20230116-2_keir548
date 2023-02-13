function initCarousel() {
  let slides = document.querySelector(".carousel__inner"); // Текущий слайд
  let slide = document.querySelectorAll(".carousel__slide"); // Коллекция слайдов
  let nextSlide = document.querySelector(".carousel__arrow_right"); // Следующий слайд
  let prevSlide = document.querySelector(".carousel__arrow_left"); // Предыдущий слайд
  let carousel = document.querySelector(".carousel"); // Контайнер нашего слайдера, на него вешаем событие
  let widthSlide = slides.offsetWidth; // Получаем ширину одного слайда
  let startSlide = 0; // Стартовая позиция слайда
  // Прячем стрелку назад
  if (startSlide === 0) {
    prevSlide.style.display = "none";
  }
  carousel.addEventListener("click", (e) => {
    // Проверка на то, что слайдер стоит в начальной позиции и что бы не переключался на -1 слайд
    if (startSlide >= 0) {
      // Проверяем куда был сделан клик + доп проверка на то что клик был по стрелке "img" элемента
      if (e.target === nextSlide || e.target === nextSlide.childNodes[1]) {
        // Показываем стрелку прокрутки назад
        prevSlide.style.display = "flex";
        // Делаем проверку, что бы прокрутка не ушла за последний слайд и показываем следующий слайд
        if (startSlide < widthSlide * (slide.length - 1)) {
          startSlide += widthSlide;
          slides.style.transform = `translateX(${-startSlide}px)`;
        } // Прячем стрелку если дошли до последнего слайда
        if (startSlide === widthSlide * (slide.length - 1)) {
          return (nextSlide.style.display = "none");
        }
        // Проверяем куда был сделан клик + доп проверка на то что клик был по стрелке "img" элемента
      } else if (
        e.target === prevSlide ||
        e.target === prevSlide.childNodes[1]
      ) {
        //Возвращаем стрелку прокрутки вперед
        nextSlide.style.display = "flex";
        // Проверяем что бы слайдер не переключался на -1ый слайд
        if (startSlide > 0) {
          startSlide -= widthSlide;
          slides.style.transform = `translateX(${-startSlide}px)`;
        } // Если стоит на 1 слайде, прячем стрелку
        if (startSlide === 0) {
          return (prevSlide.style.display = "none");
        }
      }
    }
  });
}
