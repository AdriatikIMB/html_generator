// Funksjon for å endre bakgrunnsfargen
function changeBackgroundColor() {
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

// Funksjon for å legge til HTML-elementer dynamisk
function addElement() {
    let elementType = document.getElementById("elementType").value; // Velger HTML-elementtype
    let text = document.getElementById("textInput").value; // Henter tekst
    let color = document.getElementById("colorPicker").value; // Henter tekstfarge
    let position = document.getElementById("positionPicker").value; // Velger hvor elementet skal legges til

    if (text.trim() === "") {
        alert("Vennligst skriv inn en tekst.");
        return;
    }

    let newElement = document.createElement(elementType); // Oppretter nytt element
    newElement.innerText = text;
    newElement.style.color = color;

    document.getElementById(position).appendChild(newElement); // Legger til elementet på valgt plass
}
