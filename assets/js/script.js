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

let carts = document.querySelectorAll(".product__cart");

let products = [{
        name: 'Huwei Watch GT3',
        tag: 'item2',
        price: 108,
        inCart: 0
    },
    {
        name: 'Huwei MateBook D 15',
        tag: 'item1',
        price: 948,
        inCart: 0
    },
    {
        name: 'Huwei MatePad 11',
        tag: 'item3',
        price: 388,
        inCart: 0
    },
]

for (var i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector(".number-badge").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log("the product is ", product);
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(".number-badge").textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".number-badge").textContent = 1;
    }

    setItem(product);
}

function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart');

    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayProduct() {

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".cart__item__container")
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<div class="row">
            <div class="col l-4 m-4 c-4 xs-6">
                <div class="cart__item">
                    <div class="cart__item__checkbox">
                        <label>
                            <input type="checkbox" id="item">
                            <span class="checkbox-label"></span>
                        </label>
                    </div>
                    <div class="cart__item__img">
                        <img src="./assets/img/${item.tag}.jfif" alt="">
                    </div>
                    <div class="cart__item__desc">
                        <a href="product.html">
                            ${item.name}
                        </a>
                    </div>
                </div>
            </div>
            <div class="col l-2 m-2 c-2 xs-0">
                <div class="cart__first__price">
                    <span>$</span>
                    <div class="cart__first__price__number">
                        ${item.price}
                    </div>
                </div>
            </div>
            <div class="col l-2 m-2 c-2 xs-0">
                <div class="cart__quantity">
                    <div class="quantity__btn" id="minus">-</div>
                    <input type="text" value="${item.inCart}" id="quantity__input">
                    <div class="quantity__btn" id="plus">+</div>
                </div>
            </div>
            <div class="col l-2 m-2 c-2 xs-0">
                <div class="cart__final__price">
                    <span>
                        $
                    </span>
                    <div class="cart__final__price__number">
                        ${item.inCart * item.price},00
                    </div>
                </div>
            </div>
            <div class="col l-2 m-2 c-2 xs-6">
                <div class="cart__remove">
                    <i class="fa fa-trash"></i>
                </div>
            </div>
        </div>`

        });

    }
}

displayProduct();
displayCart();
onLoadCartNumbers();