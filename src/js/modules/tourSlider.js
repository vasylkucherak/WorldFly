export default function tourSlider() {
    const tourSelect = document.querySelector('#select'),
          tourList = document.querySelector('.tour__slider-list'),
          tourCards = tourList.querySelectorAll('.tour__slider-card'),
          tourBtnPrev = document.querySelector('.tour__slider-prev'),
          tourBtnNext = document.querySelector('.tour__slider-next');
    
    let tourCounter = 0,
        cardCount = 0;

    tourCards.forEach(tourCard => {
        tourCard.classList.add('active');
        cardCount++;
    });

    tourSelect.addEventListener('change', () => {
        cardCount = 0;
        tourCounter = 0;
        tourList.style.transform = `translateX(0)`;
        tourBtnPrev.classList.remove('active');
        tourCards.forEach(tourCard => {
            tourCard.classList.remove('active');
            if (tourCard.classList.contains(tourSelect.value)) {
                tourCard.classList.add('active');
                cardCount++;
            }
        });
        if (cardCount > 3) {
            tourBtnNext.classList.add('active');
        } else {
            tourBtnNext.classList.remove('active');
        }
    });

    tourBtnNext.addEventListener('click', () => {
        if (tourCounter < cardCount - 3) {
            tourCounter++;
            tourList.style.transform = `translateX(calc(-${tourCounter} * (31vw - 10px)))`;
            tourBtnNext.classList.add('active');
            tourBtnPrev.classList.add('active');
        }
        if (tourCounter == cardCount - 3) {
            tourBtnNext.classList.remove('active');
        }

    });
    tourBtnPrev.addEventListener('click', () => {
        if (tourCounter > 0) {
            tourCounter--;
            tourList.style.transform = `translateX(calc(-${tourCounter} * (31vw - 10px)))`;
            tourBtnPrev.classList.add('active');
            tourBtnNext.classList.add('active');
        }
        if (tourCounter == 0) {
            tourBtnPrev.classList.remove('active');
        }
    });
}