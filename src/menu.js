function MenuItem(name, price, desc) {
  return { name, price: price + '∆', desc };
}

import { DomTool } from "./dom_tool";

export default (function() {
  const items = [
    MenuItem('Latte', 110, 'Espresso with steamed milk and some foam'),
    MenuItem('Cappuccino', 110, 'Espresso with equal parts steamed milk and foam'),
    MenuItem('Flat White', 100, 'Espresso and steamed milk and minimal foam'),
    MenuItem('Cortado', 80, 'Equal part espresso and steamed milk'),
    MenuItem('Macchiato', 80, 'Equal part espresso and foam'),
    MenuItem('Americano', 60, 'Espresso with water'),
  ];

  const createItemNode = item => {
    const itemNode = document.createElement('div');
    itemNode.classList.add('menu-item');
    itemNode.id = item.name.toLowerCase().replaceAll(' ', '-');

    const foam = document.createElement('div');
    const milk = document.createElement('div');
    const espresso = document.createElement('div');

    foam.classList.add('foam');
    milk.classList.add('milk');
    espresso.classList.add('espresso');
    
    itemNode.append(
      DomTool.createText('h3', item.name), 
      DomTool.createText('strong', item.price),
      DomTool.createText('p', item.desc),
      foam,
      milk,
      espresso );
    return itemNode;
  }

  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.classList.add('subcontent');
  menu.append(...items.map(item => createItemNode(item)));

  return [ DomTool.createText('h2', 'Menu'), document.createElement('hr'), menu ]; 
})();