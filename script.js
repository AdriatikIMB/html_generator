// Endre bakgrunnsfarge
function changeBackgroundColor() {
    var colorInput = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = colorInput;
}

// Legg til element i valgt område
function addElement() {
    var elementType = document.getElementById("elementType").value;
    var text = document.getElementById("textInput").value;
    var color = document.getElementById("colorPicker").value;
    var position = document.getElementById("positionPicker").value;

    var newElement = document.createElement(elementType);
    newElement.textContent = text;
    newElement.style.color = "#" + color;
    newElement.classList.add("draggable");

    var editButton = document.createElement("button");
    editButton.textContent = "Rediger";
    editButton.addEventListener("click", function() {
        var newText = prompt("Skriv inn ny tekst:", newElement.textContent);
        if (newText !== null) {
            newElement.textContent = newText;
        }
    });

    var removeButton = document.createElement("button");
    removeButton.textContent = "Fjern";
    removeButton.addEventListener("click", function() {
        newElement.remove();
        updateCounters();
    });

    var targetArea = document.getElementById(position);
    targetArea.appendChild(newElement);
    targetArea.appendChild(editButton);
    targetArea.appendChild(removeButton);

    updateCounters();
    enableDragAndDrop();
}

// Sorter elementene i valgt område
function sortArea(areaId) {
    var area = document.getElementById(areaId);
    var elements = Array.from(area.children);
    elements.sort((a, b) => a.textContent.localeCompare(b.textContent));

    area.innerHTML = '';
    elements.forEach(element => area.appendChild(element));

    updateCounters();
}

// Oppdater tellere
function updateCounters() {
    document.getElementById("contentAreaCounter").textContent = "Content Area: " + document.getElementById("contentArea").children.length / 3;
    document.getElementById("customAreaCounter").textContent = "Custom Area: " + document.getElementById("customArea").children.length / 3;
}

// Enable drag and drop using Dragula
function enableDragAndDrop() {
    dragula([document.getElementById('contentArea'), document.getElementById('customArea')])
        .on('drop', function() {
            updateCounters();
        });
}

document.addEventListener("DOMContentLoaded", function() {
    enableDragAndDrop();
});
