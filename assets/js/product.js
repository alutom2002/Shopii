const colorbtn = document.querySelectorAll(".color__btn");
const sizebtn = document.querySelectorAll(".size__btn");
const ratebtn = document.querySelectorAll(".rating__btn");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
var checkcl = 0;
var checksz = 0;
var checkrt = 0;
var count;
colorbtn.forEach((item, i) => {
    item.onclick = function() {
        colorbtn[checkcl].classList.remove('active');
        item.classList.add('active');
        checkcl = i;
    }
})

sizebtn.forEach((item, i) => {
    item.onclick = function() {
        sizebtn[checksz].classList.remove('active');
        item.classList.add('active');
        checksz = i;
    }
})

ratebtn.forEach((item, i) => {
    item.onclick = function() {
        ratebtn[checkrt].classList.remove('active');
        item.classList.add('active');
        checkrt = i;
    }
})

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