// 1️⃣ Change text color of heading with id="title" to red.
document.querySelector('#title').style.color = 'red';

// 2️⃣ Change background color of all <p> elements to lightgray.
document.querySelectorAll('p').forEach(p => {
  p.style.backgroundColor = 'lightgray';
});

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
document.querySelector('#title').textContent = 'Welcome to the DOM Lab!';

// 4️⃣ Add a solid black border to all <div> elements.
document.querySelectorAll('div').forEach(div => {
  div.style.border = '1px solid black';
});

// 5️⃣ Increase font size of the first <h1> to 36px.
document.querySelector('h1').style.fontSize = '36px';

// 6️⃣ Change text color of elements with class="highlight" to blue.
document.querySelectorAll('.highlight').forEach(el => {
  el.style.color = 'blue';
});

// 7️⃣ Add CSS class "active" to the first <div>.
document.querySelector('div').classList.add('active'); // This will select #container

// 8️⃣ Change the <body> background color to lightblue.
document.body.style.backgroundColor = 'lightblue';

// 9️⃣ Set the font family of all <p> elements to Arial.
document.querySelectorAll('p').forEach(p => {
  p.style.fontFamily = 'Arial';
});

// 🔟 Change the image source of #sampleImage.
document.querySelector( '#sampleImage' ).src = 'https://placehold.co/200x200';


// 1️⃣1️⃣ Create a new <p> and append it to the <body>.
const newPara = document.createElement('p');
newPara.textContent = 'This is a brand new paragraph!';
document.body.appendChild(newPara);

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
const newItem = document.createElement('li');
newItem.textContent = 'New List Item';
document.querySelector('#list').appendChild(newItem); // Using #list id

// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
const newButton = document.createElement('button');
newButton.textContent = 'Click Me!';
document.querySelector('#output').appendChild(newButton); // Appending to #output div

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
const newH2 = document.createElement('h2');
newH2.textContent = 'Dynamic Subheading';
const firstPara = document.querySelector('p');
document.body.insertBefore(newH2, firstPara);

// 1️⃣5️⃣ Create an image and set width and height.
const newImage = document.createElement('img');
newImage.src = 'https://placehold.co/100x50';
newImage.width = 100;
newImage.height = 50;
document.querySelector('#output').appendChild(newImage); // Appending to #output div

// 1️⃣6️⃣ Add 3 new <li> items using a loop.
const list = document.querySelector('#list');
for (let i = 1; i <= 3; i++) {
  const loopItem = document.createElement('li');
  loopItem.textContent = `Loop Item ${i}`;
  list.appendChild(loopItem);
}

// 1️⃣7️⃣ Create a <div> with class "card" and text inside.
const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
cardDiv.textContent = 'This is a card element.';
document.querySelector('#output').appendChild(cardDiv);

// 1️⃣8️⃣ Append a paragraph containing your name.
const namePara = document.createElement('p');
namePara.textContent = 'Mohamed Ahmad khalil al tawil'; // Your name
document.body.appendChild(namePara);

// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.
document.querySelectorAll('p').forEach(p => {
  const editSpan = document.createElement('span');
  editSpan.textContent = ' [Edited]';
  editSpan.style.color = 'gray';
  p.appendChild(editSpan);
});

// 2️⃣0️⃣ Remove the last child of <ul>.
const listToRemoveFrom = document.querySelector('#list');
if (listToRemoveFrom.lastElementChild) {
  listToRemoveFrom.removeChild(listToRemoveFrom.lastElementChild);
}



// 2️⃣1️⃣ Add click event that shows an alert.
// We use the button with id="mainButton"
document.querySelector('#mainButton').addEventListener('click', () => {
  alert('Main Button Clicked!');
});

// 2️⃣2️⃣ Change background color of a <div> when clicked.
// We use the div with id="container"
document.querySelector('#container').addEventListener('click', (event) => {
  event.currentTarget.style.backgroundColor = 'yellow';
});

// 2️⃣3️⃣ When hovering over <p>, make it bold.
document.querySelectorAll('p').forEach(p => {
  p.addEventListener('mouseover', () => {
    p.style.fontWeight = 'bold';
  });
});

// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.
document.querySelectorAll('p').forEach(p => {
  p.addEventListener('mouseout', () => {
    p.style.fontWeight = 'normal';
  });
});

// 2️⃣5️⃣ Add button to hide the image.
// We will create this button dynamically
const hideButton = document.createElement('button');
hideButton.textContent = 'Hide Image';
document.querySelector('#output').appendChild(hideButton);

hideButton.addEventListener('click', () => {
  document.querySelector('#sampleImage').style.display = 'none';
});

// 2️⃣6️⃣ Add button to show the image again.
// We will create this button dynamically
const showButton = document.createElement('button');
showButton.textContent = 'Show Image';
document.querySelector('#output').appendChild(showButton);

showButton.addEventListener('click', () => {
  document.querySelector('#sampleImage').style.display = 'block';
});

// 2️⃣7️⃣ Create a counter button that increases with each click.
// Let's re-use the #mainButton for this
let count = 0;
document.querySelector('#mainButton').addEventListener('click', () => {
  count++;
  document.querySelector('#mainButton').textContent = `Clicked ${count} times`;
  // Note: This overrides the alert from #21. You might want to choose one.
});

// 2️⃣8️⃣ Display entered text from an input when button clicked.
// We use #displayButton and #userInput from your HTML
document.querySelector('#displayButton').addEventListener('click', () => {
  const inputText = document.querySelector('#userInput').value;
  document.querySelector('#output').textContent = `You wrote: ${inputText}`;
});

// 2️⃣9️⃣ Change background color randomly when a button is clicked.
// Let's add this to the #mainButton as well
document.querySelector('#mainButton').addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
});
// (Note: #21, #27, #29 all use the same button. The *last* one will work)
// (My advice: Comment out #21 and #27 if you want #29 to work)

// 3️⃣0️⃣ Display which key is pressed.
window.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
  // Let's show it in the #output div
  document.querySelector('#output').textContent = `Key pressed: ${event.key}`;
} );



// 3️⃣1️⃣ Change text of the first <li>.
document.querySelector('#list li').textContent = 'First item (Edited)';

// 3️⃣2️⃣ Get input value when button clicked.
// (Same as #28, just logging to console)
document.querySelector('#displayButton').addEventListener('click', () => {
  const value = document.querySelector('#userInput').value;
  console.log(value);
});

// 3️⃣3️⃣ Count number of <p> and alert the count.
const pCount = document.querySelectorAll('p').length;
alert(`There are ${pCount} paragraph elements on the page.`);

// 3️⃣4️⃣ Remove all <p> elements.
// document.querySelectorAll('p').forEach(p => p.remove()); // Uncomment this line to run it

// 3️⃣5️⃣ Replace existing <h2> with new one.
const oldH2 = document.querySelector('h2');
const brandNewH2 = document.createElement('h2');
brandNewH2.textContent = 'This H2 has been replaced';
if (oldH2) {
  oldH2.replaceWith(brandNewH2);
}

// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.
// (Assuming .highlighted is defined in your CSS)
document.querySelectorAll('#list li').forEach(li => {
  li.classList.add('highlighted');
});

// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.
// We use #container and the 'active' class from your CSS
document.querySelector('#container').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active');
});

// 3️⃣8️⃣ Clone an existing element and append copy.
// Cloning the #list
const listToClone = document.querySelector('#list');
const clonedList = listToClone.cloneNode(true); // 'true' clones all children
document.body.appendChild(clonedList);

// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.
// Let's create a new button for this
const scrollButton = document.createElement('button');
scrollButton.textContent = 'Scroll to Bottom';
document.querySelector('#output').appendChild(scrollButton);

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
const fruits = ['Apple', 'Banana', 'Cherry'];
const listContainer = document.querySelector('#list'); // Replacing #list content
let listHTML = '';
fruits.forEach(fruit => {
  listHTML += `<li>${fruit}</li>`;
});
listContainer.innerHTML = listHTML;