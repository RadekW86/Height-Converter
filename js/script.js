{
    const welcome = () => {
        console.log("Hi!");
    }
    welcome();
}


{
    function ConvertHeight() {
        const feetElement = document.querySelector(".js-feet");
        const inchesElement = document.querySelector(".js-inches");
        const centimetersElement = document.querySelector(".js-centimeters");
        feetElement.addEventListener("input", () => {
            centimetersElement.value = "";
        });
        inchesElement.addEventListener("input", () => {
            centimetersElement.value = "";
        });
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const cm = feetElement.value * 30.48 + inchesElement.value * 2.54;
            centimetersElement.value = cm.toFixed(2);
        });
    }
    ConvertHeight();
}

{
    function ShowHideList() {
        const buttonListElement = document.querySelector(".js-buttonList");
        const tableElement = document.querySelector(".table");
        buttonListElement.addEventListener("click", () => {
            tableElement.classList.toggle("table--hidden");
            if (tableElement.classList.contains("table--hidden")) {
                buttonListElement.innerHTML = "ˇˇˇ Show Table ˇˇˇ";
            }
            else {
                buttonListElement.innerHTML = "ˆˆˆ Hide Table ˆˆˆ";
            };
        });
    }
    ShowHideList();
}