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

var countdown = () => {
    var countDate = new Date("January 15, 2022 00:00:00").getTime();
    var now = new Date().getTime();
    var time = countDate - now;

    //Constant

    var sec = 1000;
    var min = sec * 60;
    var hour = min * 60;
    var day = hour * 24;

    //Calculate time

    var textDay = Math.floor(time / day);
    var textHour = Math.floor((time % day) / hour);
    var textMin = Math.floor((time % hour) / min);
    var textSec = Math.floor((time % min) / sec);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour < 10 ? '0' + textHour : textHour;
    document.querySelector(".minute").innerText = textMin < 10 ? '0' + textMin : textMin;
    document.querySelector(".second").innerText = textSec < 10 ? '0' + textSec : textSec;
}

setInterval(countdown, 1000);

var tabs = document.querySelectorAll(".shopping__recomend");
var panes = document.querySelectorAll(".shopping__section");

tabs.forEach((tabs, index) => {
    var pane = panes[index];
    tabs.onclick = function() {
        document.querySelector(".shopping__recomend.active").classList.remove('active');
        document.querySelector(".shopping__section.active").classList.remove('active');
        this.classList.add('active');
        pane.classList.add('active');
        console.log(this);
    }
})

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0);
});

var login = document.querySelector(".login__register__wrapper");
var user = document.querySelector(".header__user-wrapper");
var close = document.querySelector(".btn__close");
var overlay = document.querySelector(".overlay__wrapper");
var loginbtn = document.querySelector("#login__btn");
var registerbtn = document.querySelector("#register__btn");

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