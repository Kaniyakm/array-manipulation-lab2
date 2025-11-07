// Task 1: Basic Array Manipulation
let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  console.log("Shopping List:", shoppingList);
}

// --------------------------
// Task 2: Filter and Search
// --------------------------

// Modified addItem function 
function addItem(item) {
  const lowerItem = item.toLowerCase();
  const itemExists = shoppingList.some(
    (existingItem) => existingItem.toLowerCase() === lowerItem
  );

  if (!itemExists) {
    shoppingList.push(item);
    console.log(`${item} added to the shopping list.`);
  } else {
    console.log(`${item} is already in the shopping list.`);
  }
}

// Filter function 
function filterItems(searchTerm) {
  const results = shoppingList.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(`Search results for "${searchTerm}":`, results);
  return results;
}


// TEST CODE 
addItem("Apples");
addItem("Bananas");
addItem("apples");  
displayList();
filterItems("ap");

function updateListDisplay() {
  const listElement = document.getElementById("shoppingList");
  listElement.innerHTML = "";
  shoppingList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function addItemFromInput() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim();
  if (newItem) {
    addItem(newItem);
    input.value = "";
    updateListDisplay();
  }
}

function removeLastItem() {
  shoppingList.pop();
  updateListDisplay();
}




