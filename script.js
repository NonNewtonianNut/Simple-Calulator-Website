function clearScreen() {
    let displayBox = document.getElementById("res");
    displayBox.value = "";
}

function display(val) {
    let displayBox = document.getElementById("res");
    displayBox.value += val;
}

function calculate() {
    let displayBox = document.getElementById("res").value;
    let answer = eval(displayBox);
    document.getElementById("res").value = answer;
}