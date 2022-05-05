//! Explore-tabs
export default function exploreTabs() {
    const tabs = document.querySelectorAll('.explore-tabs__item');
    const block = document.querySelectorAll('.explore-tabs__block');
    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
        tab.addEventListener('click', function(e) {
            if (!tab.classList.contains('active')) {
                for (let x = 0; x < tabs.length; x++) {
                    const t = tabs[x];
                    t.classList.remove('active');
                    block[x].classList.remove('active');
                }
                tab.classList.add('active');
                block[i].classList.add('active');
            }
        });
    }
}