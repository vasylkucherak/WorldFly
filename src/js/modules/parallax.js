//! Parallax effect
export default function parallax() {
    const parallax = document.querySelector('.parallax');

    if (parallax) {

        // Parallax on mousemove
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
        const bottomBg = document.querySelector('.img-parallax__bottom-bg');


        const forBg = 45;
        const forBack2 = 40;
        const forBack1 = 35;
        const forCloud3 = 30;
        const forCloud2 = 25;
        const forCloud1 = 20;
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
            bottomBg.style.cssText = `transform: translate(${positionX / forFront}%,${positionY / forFront}%);`;

            requestAnimationFrame(setMouseParallax);
        }
        setMouseParallax();

        document.addEventListener('mousemove', function(e) {
            if (document.documentElement.scrollTop < 1000) {
                const parallaxWidth = parallax.offsetWidth;
                const parallaxHeight = parallax.offsetHeight;

                const coordX = e.pageX - parallaxWidth / 2;
                const coordY = e.pageY - parallaxHeight / 2;

                coordXprocent = coordX / parallaxWidth * 100;
                coordYprocent = coordY / parallaxHeight * 100;
            }
        });

        // Parallax on scroll

        document.addEventListener('scroll', function(e) {
            if (document.documentElement.scrollTop < 1800) {
                const scrollTopProcent = window.scrollY / parallax.offsetHeight * 100;
                setScrollParallax(scrollTopProcent);
            } 
        });

        function setScrollParallax(scrollTopProcent) {
            bg.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 5}%);`;//5
            cloud3.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;//6
            cloud2.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 5}%);`;//5
            cloud1.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4}%);`;//4
            back2.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4.5}%);`;//4.5
            back1.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4}%);`;//4
            lake.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4}%);`;//4
            middle3.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 4}%);`;//4
            middle2.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3.5}%);`;//3.5
            middle1.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;//3
            front.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 2}%);`;
        }
    }
}