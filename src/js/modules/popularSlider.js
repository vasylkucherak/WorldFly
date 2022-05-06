export default function popularSlider() {
    const sliderList = document.querySelector('.popular__slider-list'),
          sliderCards = sliderList.querySelectorAll('.popular__slider-card'),
          sliderBtnPrev = document.querySelector('.popular__slider-prev'),
          sliderBtnNext = document.querySelector('.popular__slider-next');
    
    let scrollCounter = 0;
            
    sliderBtnNext.classList.add('active');
    sliderBtnNext.addEventListener('click', () => {
        if (scrollCounter < sliderCards.length - 1) {
            scrollCounter++;
            sliderList.style.transform = `translateX(-${scrollCounter * 60}vw)`;
            sliderBtnNext.classList.add('active');
            sliderBtnPrev.classList.add('active');
        }
        if (scrollCounter == sliderCards.length - 1) {
            sliderBtnNext.classList.remove('active');
        }
        sliderCards.forEach(sliderCard => {
            sliderCard.classList.remove('active');
        });
        sliderCards[scrollCounter].classList.add('active');

    });
    sliderBtnPrev.addEventListener('click', () => {
        if (scrollCounter > 0) {
            scrollCounter--;
            sliderList.style.transform = `translateX(-${scrollCounter * 60}vw)`;
            sliderBtnPrev.classList.add('active');
            sliderBtnNext.classList.add('active');
        }
        if (scrollCounter == 0) {
            sliderBtnPrev.classList.remove('active');
        }
        sliderCards.forEach(sliderCard => {
            sliderCard.classList.remove('active');
        });
        sliderCards[scrollCounter].classList.add('active');
    });
}