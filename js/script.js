{
    const feetElement = document.querySelector(".js-feetInput");
    const inchesElement = document.querySelector(".js-inchesInput");
    const centimetersElement = document.querySelector(".js-centimetersOutput");
    const formElement = document.querySelector(".js-form");
    const computeHeight = (feet, inches) => feet * 30.48 + inches * 2.54;
    const reduceToFixed = (cm) => cm.toFixed(2);
    const convertHeight = () => {
        keepBlankResultOnInputChange();
        formElement?.addEventListener("submit", (event) => {
            event.preventDefault();
            const feet = Number(feetElement?.value);
            const inches = Number(inchesElement?.value);
            if (!isNaN(feet) && !isNaN(inches)) {
                centimetersElement.value = reduceToFixed(computeHeight(feet, inches));
            }
        });
    };
    const keepBlankResultOnInputChange = () => {
        feetElement.addEventListener("input", () => {
            centimetersElement.value = "";
        });
        inchesElement.addEventListener("input", () => {
            centimetersElement.value = "";
        });
    };
    convertHeight();
}
{
    const listButtonElement = document.querySelector(".js-listButton");
    const tableElement = document.querySelector(".table");
    const toggleListDisplay = () => {
        listButtonElement?.addEventListener("click", () => {
            tableElement?.classList.toggle("table--hidden");
            if (tableElement?.classList.contains("table--hidden")) {
                listButtonElement.innerHTML = "ˇˇˇ Show Table ˇˇˇ";
            }
            else {
                listButtonElement.innerHTML = "ˆˆˆ Hide Table ˆˆˆ";
            }
        });
    };
    toggleListDisplay();
}
