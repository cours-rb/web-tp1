
function init() {
  const myList = ["Jean-Pierre PAPIN", "Rudy VÖLLER"]

  myList.forEach(function (name) {
    addContactToList(name);
  })

  const addButton = document.querySelector("#addNameButton");
  addButton.addEventListener("click", handleAddButtonClick);
}

function handleAddButtonClick() {
  const firstName = document.querySelector("#formFirstName");
  const lastName = document.querySelector("#formLastName");

  const contactText = firstName.value + " " + lastName.value;
  addContactToList(contactText);
}

/* Add li containing contactText in contactList list */
function addContactToList(contactText) {
  const contact = document.createElement("li");
  contact.innerText = contactText;

  const contactList = document.querySelector("#contactList");

  contactList.appendChild(contact);
}

init();
