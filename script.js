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
        updateCounters();
    });

    var targetArea = document.getElementById(position);
    targetArea.appendChild(newElement);
    targetArea.appendChild(editInput);
    targetArea.appendChild(editButton);
    targetArea.appendChild(removeButton);

    updateCounters();
}

// Sorter elementene i valgt område
function sortArea(areaId) {
    var area = document.getElementById(areaId);
    var elements = Array.from(area.children); // Hent alle barna (elementene)

    // Filtrer ut input og knapper for å bare sortere faktiske elementer (ikke input, edit, remove)
    elements = elements.filter(function(element) {
        return element.tagName !== 'INPUT' && element.tagName !== 'BUTTON';
    });


    var headers = elements.filter(function(element) {
        return element.tagName === 'H1';
    });

    var nonHeaders = elements.filter(function(element) {
        return element.tagName !== 'H1';
    });

    // Sorter de ikke-overskridne elementene alfabetisk basert på tekstinnhold
    nonHeaders.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });

    // Først legg til overskriftene (H1) og deretter de andre elementene
    var sortedElements = headers.concat(nonHeaders);

    area.innerHTML = ''; // Fjern eksisterende elementer
    sortedElements.forEach(function(element) {
        area.appendChild(element); // Legg til de sorterte elementene
    });

    // Legg til input og knapper tilbake etter sortering
    sortedElements.forEach(function(element) {
        area.appendChild(element.nextSibling); // Input
        area.appendChild(element.nextSibling); // Edit button
        area.appendChild(element.nextSibling); // Remove button
    });

    updateCounters();
}

// Oppdater tellere
function updateCounters() {
    document.getElementById("contentAreaCounter").textContent = "Content Area: " + document.getElementById("contentArea").children.length / 4; // Dividerer med 4 siden vi har 4 elementer per sett (tekst, input, edit, remove)
    document.getElementById("customAreaCounter").textContent = "Custom Area: " + document.getElementById("customArea").children.length / 4;
}

// Endre teksten på et element uavhengig av sorteringen
function editText(element) {
    var newText = prompt("Skriv inn ny tekst:", element.textContent);
    if (newText !== null) {
        element.textContent = newText;
    }
}
