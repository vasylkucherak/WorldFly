import * as webp from "./modules/isWebP.js"; //? Перевірка підтримки webp зображень

import burger from "./modules/burger.js";
import pcOrMobile from "./modules/pcOrMobile.js";
import parallax from "./modules/parallax.js";
import exploreTabs from "./modules/exploreTabs.js";
import popularSlider from "./modules/popularSlider.js";
import tourSlider from "./modules/tourSlider.js";

window.onload = function() {
    webp.isWebP();

    burger();
    pcOrMobile();
    parallax();
    exploreTabs();
    popularSlider();
    tourSlider();
}