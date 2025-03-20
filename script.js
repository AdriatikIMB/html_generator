function changeBackgroundColor() {
    var colorInput = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = colorInput;
}

function addElement() {
    var elementType = document.getElementById("elementType").value;
    var text = document.getElementById("textInput").value;
    var color = document.getElementById("colorPicker").value;
    var position = document.getElementById("positionPicker").value;

    var newElement = document.createElement(elementType);
    newElement.textContent = text;
    newElement.style.color = "#" + color;

    if (position === "contentArea") {
        document.getElementById("contentArea").appendChild(newElement);
    } else if (position === "customArea") {
        document.getElementById("customArea").appendChild(newElement);
    }
}