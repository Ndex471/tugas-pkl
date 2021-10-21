const plus = document.getElementById("plus");
const min = document.getElementById("minus");
const addCart = document.getElementById("add-to-cart");

plus.addEventListener("click", addValue);
min.addEventListener("click", reValue);

min.setAttribute("disabled", "disabled");
addCart.classList.add("hidden");

function addValue() {
    let cartValue = document.getElementById("cart-value");
    cartValue.value++;

    if (cartValue.value > 0) {
        min.removeAttribute("disabled");

        addCart.classList.remove("hidden");
    }
}

function reValue() {
    let cartValue = document.getElementById("cart-value");
    cartValue.value--;

    if (cartValue.value == 0) {
        min.setAttribute("disabled", "disabled");
    }

    if (cartValue.value < 1) {
        addCart.classList.add("hidden");
    }
}