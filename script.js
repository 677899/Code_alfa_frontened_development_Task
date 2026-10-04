// Get display screen
const display = document.getElementById("display");


// Add value to display
function addValue(value) {

    // If display is 0, replace it
    if (display.value === "0") {

        display.value = value;

    } else {

        display.value += value;

    }
}


// Clear the display
function clearDisplay() {

    display.value = "0";

}


// Delete last character
function deleteLast() {

    if (display.value.length > 1) {

        display.value =
            display.value.slice(0, -1);

    } else {

        display.value = "0";

    }

}


// Calculate result
function calculate() {

    try {

        // Get expression
        let expression = display.value;

        // Calculate
        let result = eval(expression);

        // Check invalid result
        if (!isFinite(result)) {

            display.value = "Error";

        } else {

            display.value = result;

        }

    } catch (error) {

        display.value = "Error";

    }

}


// Keyboard support
document.addEventListener("keydown", function(event) {

    const key = event.key;


    // Numbers
    if (
        key >= "0" &&
        key <= "9"
    ) {

        addValue(key);

    }


    // Decimal
    else if (key === ".") {

        addValue(".");

    }


    // Operators
    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
    ) {

        addValue(key);

    }


    // Enter = Calculate
    else if (key === "Enter") {

        calculate();

    }


    // Backspace = Delete
    else if (key === "Backspace") {

        deleteLast();

    }


    // Escape = Clear
    else if (key === "Escape") {

        clearDisplay();

    }

});