const display = document.getElementById("display")

function appendToDisplay(string) {
    display.value += string
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}