"use strict";

let array = [];
let allbars = document.querySelectorAll(".bars");
let n;

for (let i = 0; i < 40; i++) {
    n = Math.floor(Math.random() * 40);
    array.push(arrayIndex());
}
loop();

function loop() {
    array.push(array[n]);
    array.shift();
    for (let i = 0; i < 40; i++) {
        allbars[i].style.height = array[i] * 10 + "px";
    }
    setTimeout(loop, 1000);
}

function arrayIndex() {
    return Math.floor(Math.random() * 32);

}