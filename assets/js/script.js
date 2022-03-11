var swiper = new Swiper(".banner__slider", {
    spaceBetween: 50,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mall__shop__slider", {
    spaceBetween: 50,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mall__info__slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".flash__slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const countdown = () => {
    const countDate = new Date("January 20, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const time = countDate - now;

    //Constant

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    //Calculate time

    const textDay = Math.floor(time / day);
    const textHour = Math.floor((time % day) / hour);
    const textMin = Math.floor((time % hour) / min);
    const textSec = Math.floor((time % min) / sec);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour < 10 ? '0' + textHour : textHour;
    document.querySelector(".minute").innerText = textMin < 10 ? '0' + textMin : textMin;
    document.querySelector(".second").innerText = textSec < 10 ? '0' + textSec : textSec;
}

setInterval(countdown, 1000);

const tabs = document.querySelectorAll(".shopping__recomend");
const panes = document.querySelectorAll(".shopping__section");

tabs.forEach((tabs, index) => {
    const pane = panes[index];
    tabs.onclick = function() {
        document.querySelector(".shopping__recomend.active").classList.remove('active');
        document.querySelector(".shopping__section.active").classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
    }
})

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0);
});

const login = document.querySelector(".login__register__wrapper");
const user = document.querySelector(".header__user__wrapper");
const close = document.querySelector(".btn__close");
const overlay = document.querySelector(".overlay__wrapper");
const loginbtn = document.querySelector("#login__swap");
const registerbtn = document.querySelector("#register__swap");

user.onclick = function() {
    login.classList.toggle("active");
}

close.onclick = function() {
    login.classList.remove("active");
    document.querySelector(".register__container.active").classList.remove("active");
    document.querySelector(".login__container").classList.add("active");
}

overlay.onclick = function() {
    login.classList.remove("active");
    document.querySelector(".register__container.active").classList.remove("active");
    document.querySelector(".login__container").classList.add("active");
}

loginbtn.onclick = function() {
    document.querySelector(".register__container.active").classList.remove("active");
    document.querySelector(".login__container").classList.add("active");
}

registerbtn.onclick = function() {
    document.querySelector(".login__container.active").classList.remove("active");
    document.querySelector(".register__container").classList.add("active");
}

//quantity btn
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let quantity = document.querySelector("#quantity__input");
//click on plus
plus.onclick = (function() {
    if (quantity.value >= 1) {
        var count = quantity.value;
        ++count;
        quantity.value = count;
    }
})

minus.onclick = (function() {
    if (quantity.value > 1) {
        var count = quantity.value;
        --count;
        quantity.value = count;
    }
})