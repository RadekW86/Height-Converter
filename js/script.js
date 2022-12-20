console.log("Hi fellow devs!");
let feetElement = document.querySelector(".js-feet");
let inchesElement = document.querySelector(".js-inches");
let centimetersElement = document.querySelector(".js-centimeters");
feetElement.addEventListener("input", () => {
    centimetersElement.value = "";
});
inchesElement.addEventListener("input", () => {
    centimetersElement.value = "";
});
let formElement = document.querySelector(".js-form");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let cm = feetElement.value * 30.48 + inchesElement.value * 2.54;
    centimetersElement.value = cm.toFixed(2);
});

let buttonListElement = document.querySelector(".js-buttonList");
let tableElement = document.querySelector(".table");
buttonListElement.addEventListener("click", () => {
    tableElement.classList.toggle("table--hidden");
    if (tableElement.classList.contains("table--hidden")) {
        buttonListElement.innerHTML = "ˇˇˇ Show Table ˇˇˇ";
    }
    else {
    buttonListElement.innerHTML = "ˆˆˆ Hide Table ˆˆˆ";
    };
});