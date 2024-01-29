const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'https://picsum.photos/200')
newImage.setAttribute('alt', 'Description of image');
document.body.appendChild(newImage)

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement('section');
const newTitle = document.createElement('h2');
newTitle.innerHTML = "CSE 121b"
newSection.appendChild(newTitle);
const newP = document.createElement('p');
newP.innerHTML = "Welcome to Javascript Language"
newSection.appendChild(newP);
document.body.appendChild(newSection);