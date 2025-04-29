// Dynamic text content change
const myText = document.getElementById('myText');
myText.textContent = 'This text has been changed!';

// Modify CSS styles
const myText = document.getElementById('myText');
myText.style.color = 'purple';
myText.style.fontSize = '24px';
myText.style.fontWeight = 'bold';

// Add or remove an element
const myButton = document.getbuttonById('myButton');
const myDiv = document.getElementById('myDiv');

myButton.addEventListener('click', () => {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
    myButton.textContent = 'Remove Div';
  } else {
    myDiv.style.display = 'none';
    myButton.textContent = 'Add Div';
  }
});

