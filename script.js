function changeBackgroundColor() {
    var colorInput = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = colorInput;
}

var contentAreaCounter = 0;
var customAreaCounter = 0;
function addElement() {
    var elementType = document.getElementById("elementType").value;
    var text = document.getElementById("textInput").value;
    var color = document.getElementById("colorPicker").value;
    var position = document.getElementById("positionPicker").value;

    var newElement = document.createElement(elementType);
    newElement.textContent = text;
    newElement.style.color = "#" + color;

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        newElement.remove();
    });

    if (position === "contentArea") {
        document.getElementById("contentArea").appendChild(newElement);
        document.getElementById("contentArea").appendChild(removeButton);
    } else if (position === "customArea") {
        document.getElementById("customArea").appendChild(newElement);
        document.getElementById("customArea").appendChild(removeButton);
    }
}