let showValue = document.getElementById("show-value");
let addBtn = document.querySelector(".add-btn");
let saveNumber = document.querySelector(".save-btn");
let resetBtn = document.getElementById("reset-btn");
let storeValue = document.getElementById("value-store");

addBtn.addEventListener("click", function () {
    showValue.innerHTML = + showValue.innerHTML + 1;
});
saveNumber.addEventListener("click", function () {
    if (showValue.innerHTML != 0) {
        if (storeValue.innerHTML == 0) { storeValue.innerHTML = showValue.innerHTML } else if (storeValue.innerHTML != 0) { storeValue.innerHTML += "," + showValue.innerHTML }
    }
    showValue.innerHTML = 0
})
resetBtn.addEventListener("click", function () {
    storeValue.innerHTML = 0,
        showValue.innerHTML = 0
});