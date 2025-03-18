function changeBackgroundColor() {
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

function displayText() {
    let text = document.getElementById("textInput").value;
    document.getElementById("displayText").innerText = text;
}
