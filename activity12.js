// Adding DOM Elements using JS
let content = "This is the Bootcamp";
let header = document.querySelector("header");
let container = document.createElement("section");

container.classList.add("pencil-box");
container.setAttribute("id", "pencil");

container.innerHTML = content;

header.append(container);
// Before the header
// header.prepend(container);

header.appendChild(container);
header.replaceChild(container);
header.insertChild(container);
header.insertAdjacentElement(container);
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
