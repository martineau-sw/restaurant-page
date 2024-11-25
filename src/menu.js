


const MenuItem = (name, price, desc) => {
  return { name, price, desc };
}

const latte = MenuItem('Latte', '110∆', 'Espresso with steamed milk and light foam layer');
const cappuccino = MenuItem('Cappuccino', '110∆', 'Espresso with equal parts steamed milk and foam');
const solo = MenuItem('Solo', '60∆', 'Single espresso shot');

const items = [latte, cappuccino, solo];

function createMenuItemNode(menuItem) {
  const itemNode = document.createElement('div');
  const itemName = document.createElement('h3');
  const itemPrice = document.createElement('strong');
  const itemDesc = document.createElement('p');

  itemName.textContent = menuItem.name;
  itemPrice.textContent = menuItem.price;
  itemDesc.textContent = menuItem.desc;

  itemNode.classList.add('item');

  itemNode.appendChild(itemName);
  itemNode.appendChild(itemPrice);
  itemNode.appendChild(itemDesc);
  
  return itemNode;
}

function createMenuNode() {
  const menuNode = document.createElement('div');
  const title = document.createElement('h2');
  menuNode.setAttribute('id', 'menu');
  menuNode.appendChild(title);
  for (const item of items) {
    const itemNode = createMenuItemNode(item);
    menuNode.appendChild(itemNode);
  }

  return menuNode;
}

export { createMenuNode };