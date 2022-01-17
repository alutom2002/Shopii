function displayCart() {

}

const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
var count;
plus.onclick = function() {
    count = document.querySelector("#quantity__input").value;

    count++;

    document.querySelector("#quantity__input").value = count;
}

minus.onclick = function() {
    if (document.querySelector("#quantity__input").value > 1) {
        count = document.querySelector("#quantity__input").value;

        count--;

        document.querySelector("#quantity__input").value = count;
    } else return;
}

var final;

function getPrice() {
    const price = document.querySelector(".cart__first__price__number").textContent;
    const number = document.querySelector("#quantity__input").value;
    final = price * number;
    document.querySelector(".cart__final__price__number").innerText = final;
}

setInterval(getPrice, 1000);

const box = document.querySelector("#all");
const items = document.querySelectorAll("#item");

function checkAll() {
    var countbox = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked == true) countbox++;
    }
    if (box.checked == false) {
        if (countbox == items.length) {
            box.checked = true;
        } else(box.onclick = function() {
            for (var i = 0; i < items.length; i++) {
                items[i].checked = true;
            }
        })
    } else if (box.checked == true) {
        if (countbox != items.length) {
            box.checked = false;
        } else {
            box.onclick = function() {
                for (var i = 0; i < items.length; i++) {
                    items[i].checked = false;
                }
            }
        }
    }
}

setInterval(checkAll, 1000);

const total = document.querySelector(".cart__total__item");
const quantity = document.querySelector("#quantity");

function TotalPrice() {
    var countbox = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked == true) countbox++;
    }
    if (all.checked == true) {
        document.querySelector("#price__value").innerHTML = final;
        document.querySelector(".cart__total__item__number").innerHTML = final;
        document.querySelector(".cart__total__desc").style.display = "none";
        document.querySelector(".cart__total__item").style.display = "inline-flex";
        document.querySelector("#quantity").innerHTML = countbox;
    } else {
        document.querySelector(".cart__total__desc").style.display = "block";
        document.querySelector(".cart__total__item").style.display = "none";
    }
}

setInterval(TotalPrice, 1000);