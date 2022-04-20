'use strict';

window.onload = function() {
    const promo = document.querySelector('.promo');

    if (promo) {
        const content = document.querySelector('.promo__content');
        const bg = document.querySelector('.img-parallax__bg');
        const cloud3 = document.querySelector('.img-parallax__cloud3');
        const cloud2 = document.querySelector('.img-parallax__cloud2');
        const cloud1 = document.querySelector('.img-parallax__cloud1');
        const back2 = document.querySelector('.img-parallax__back2');
        const back1 = document.querySelector('.img-parallax__back1');
        const lake = document.querySelector('.img-parallax__lake');
        const middle3 = document.querySelector('.img-parallax__middle3');
        const middle2 = document.querySelector('.img-parallax__middle2');
        const middle1 = document.querySelector('.img-parallax__middle1');
        const front = document.querySelector('.img-parallax__front');

        const forBg = 50;
        const forCloud3 = 45;
        const forCloud2 = 40;
        const forCloud1 = 35;
        const forBack2 = 30;
        const forBack1 = 25;
        const forLake = 21;
        const forMiddle3 = 21;
        const forMiddle2 = 18;
        const forMiddle1 = 15;
        const forFront = 11;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallax() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            bg.style.cssText = `transform: translate(${positionX / forBg}%,${positionY / forBg}%);`;
            cloud3.style.cssText = `transform: translate(${positionX / forCloud3}%,${positionY / forCloud3}%);`;
            cloud2.style.cssText = `transform: translate(${positionX / forCloud2}%,${positionY / forCloud2}%);`;
            cloud1.style.cssText = `transform: translate(${positionX / forCloud1}%,${positionY / forCloud1}%);`;
            back2.style.cssText = `transform: translate(${positionX / forBack2}%,${positionY / forBack2}%);`;
            back1.style.cssText = `transform: translate(${positionX / forBack1}%,${positionY / forBack1}%);`;
            lake.style.cssText = `transform: translate(${positionX / forLake}%,${positionY / forLake}%);`;
            middle3.style.cssText = `transform: translate(${positionX / forMiddle3}%,${positionY / forMiddle3}%);`;
            middle2.style.cssText = `transform: translate(${positionX / forMiddle2}%,${positionY / forMiddle2}%);`;
            middle1.style.cssText = `transform: translate(${positionX / forMiddle1}%,${positionY / forMiddle1}%);`;
            front.style.cssText = `transform: translate(${positionX / forFront}%,${positionY / forFront}%);`;

            requestAnimationFrame(setMouseParallax);
        }
        setMouseParallax();

        promo.addEventListener('mousemove', function(e) {
            const promoWidth = promo.offsetWidth;
            const promoHeight = promo.offsetHeight;

            const coordX = e.pageX - promoWidth / 2;
            const coordY = e.pageY - promoHeight / 2;

            coordXprocent = coordX / promoWidth * 100;
            coordYprocent = coordY / promoHeight * 100;
        });
    }
}