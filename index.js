//item list
let menuItems = [
  { menuItem: 'burger', description: 'Juicy and beefy classic beef burger', price: 5.99 },
  { menuItem: 'shake', description: 'Creamy sweet classic vanilla', price: 6.99 }
];
//Functions
  //display menu item function
function displayMenuItem() {
  let search = prompt("Enter menu item:");
  let itemFound = false;

  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].menuItem.toLowerCase() === search.toLowerCase()) {  // comparison
      let item = menuItems[i];
      console.log(`Item: ${item.menuItem}\nDescription: ${item.description}\nPrice: $${item.price.toFixed(2)}`);
      itemFound = true;
      break;
    }
  }

  if (!itemFound) {
    console.log("No such item is listed on the menu.");
  }
}

  //Add menu item function
function addMenuItem() {
  let itemName = prompt("Enter the name of the new menu item!");
  let itemDescription = prompt("Enter the description of the new item!");
  let itemPrice = prompt("Enter the price of the new item!");

  let newItem = {
    menuItem: itemName,
    description: itemDescription,
    price: Number(itemPrice)
  };

  menuItems.push(newItem);

  console.log(`Added: ${newItem.menuItem} ($${newItem.price.toFixed(2)})`);
}



