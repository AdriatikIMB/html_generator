function changeBackgroundColor() {
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

function addElement() {
    let text = document.getElementById("textInput").value;
    let elementType = document.getElementById("elementType").value;
    let newElement = document.createElement(elementType);
    newElement.innerText = text;
    document.getElementById("contentArea").appendChild(newElement);
}
