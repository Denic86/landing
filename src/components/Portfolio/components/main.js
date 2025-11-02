const slideCount = document.querySelectorAll('.slide').length;
const slider = document.querySelector('.slider-wrapper');
// Находим кнопки «Назад» и «Вперёд»
const prevButton = document.querySelector('.button-prev');
const nextButton = document.querySelector('.button-next');

let currentIndex = 0; // Переменная для хранения текущего слайда
console.log(slideCount);
    // Функция смены слайдов
    function goToSlide(index) {
        let offsetWidth = slider.offsetWidth;
        if (index < 0) {
            index = slideCount - 1; // Если нажали «Назад» на первом слайде, переходим на последний
        } else if (index >= slideCount) {
            index = 0; // Если нажали «Вперёд» на последнем слайде, переходим на первый
        }
        console.log(index);
        currentIndex = index; // Запоминаем текущий слайд
        console.log(offsetWidth)
        slider.style.transform = `translateX(${(-offsetWidth * 0.45 - 10) * currentIndex}px)`; // Сдвигаем контейнер со слайдами
    }

    // Добавляем обработчик клика для кнопки «Назад»
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    // Добавляем обработчик клика для кнопки «Вперёд»
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });