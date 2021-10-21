const loading = document.querySelector(".loading");

window.addEventListener("load", function () {
    loading.classList.add("hidden");
})

const eyeButton = document.querySelectorAll(".eye-btn");
const inputPass = document.querySelectorAll("input[type=password]");

eyeButton.forEach(e => {
    e.addEventListener("click", function () {
        for (let i = 0; i <= inputPass.length; i++) {
            inputPass[i].setAttribute("type", "text");
        }
    })
});

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const prev1 = document.getElementById("prev1");
const prev2 = document.getElementById("prev2");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");


next1.onclick = function () {
    form1.classList.toggle("hidden");
    form2.classList.toggle("hidden");
    sub1.classList.replace("opacity-10", "opacity-100");
    step1.classList.replace("bg-brand", "bg-green-400");
    step1.classList.replace("opacity-30", "opacity-100");
}

next2.onclick = function () {
    form2.classList.toggle("hidden");
    form3.classList.toggle("hidden");
    step2.classList.replace("opacity-30", "opacity-100");
    step2.classList.replace("bg-brand", "bg-green-400");
    sub2.classList.replace("opacity-10", "opacity-100");
}

prev1.onclick = function () {
    form2.classList.toggle("hidden");
    form1.classList.toggle("hidden");
}

prev2.onclick = function () {
    form3.classList.toggle("hidden");
    form2.classList.toggle("hidden")
}