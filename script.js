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

    var editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = text;

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        newElement.textContent = editInput.value;
    });

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
        newElement.remove();
        if (position === "contentArea") {
            contentAreaCounter--;
        } else if (position === "customArea") {
            customAreaCounter--;
        }
        updateCounters();
    });

    if (position === "contentArea") {
        document.getElementById("contentArea").appendChild(newElement);
        document.getElementById("contentArea").appendChild(editInput);
        document.getElementById("contentArea").appendChild(editButton);
        document.getElementById("contentArea").appendChild(removeButton);
        contentAreaCounter++;
    } else if (position === "customArea") {
        document.getElementById("customArea").appendChild(newElement);
        document.getElementById("customArea").appendChild(editInput);
        document.getElementById("customArea").appendChild(editButton);
        document.getElementById("customArea").appendChild(removeButton);
        customAreaCounter++;
    }

    updateCounters();
}