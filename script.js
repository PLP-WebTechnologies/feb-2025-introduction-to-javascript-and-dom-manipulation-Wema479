// Dynamically change text content
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("dynamic-text");
    textElement.textContent = "This text has been changed dynamically!";
    
    // Modify CSS styles via JavaScript
    textElement.style.color = "blue";
    textElement.style.fontSize = "20px";
    textElement.style.fontWeight = "bold";

    // Add or remove an element when a button is clicked
    const addButton = document.getElementById("add-button");
    const removeButton = document.getElementById("remove-button");
    const container = document.getElementById("container");

    addButton.addEventListener("click", () => {
        const newElement = document.createElement("p");
        newElement.textContent = "This is a new paragraph added!";
        newElement.id = "new-paragraph";
        container.appendChild(newElement);
    });

    removeButton.addEventListener("click", () => {
        const elementToRemove = document.getElementById("new-paragraph");
        if (elementToRemove) {
            container.removeChild(elementToRemove);
        }
    });
});
