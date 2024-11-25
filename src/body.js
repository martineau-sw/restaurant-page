import { createHomeNode } from "./home";
import { createMenuNode } from "./menu";
import { createAboutNode } from "./about";

function initializePage() {
  const header = createHeaderNode();
  const content = createContentNode();
  const footer = createFooterNode();

  content.appendChild(createMenuNode());
  
  document.querySelector('body').appendChild(header);
  document.querySelector('body').appendChild(content);
  document.querySelector('body').appendChild(footer);
}

function createContentNode() {
  const div = document.createElement('div');
  div.setAttribute('id', 'content');
  return div;
}

function createHeaderNode() {
  const header = document.createElement('header');
  const bannerText = document.createElement('h1');
  bannerText.textContent = 'Facsimilie Coffee';
  header.appendChild(bannerText);
  header.appendChild(createNavNode());
  return header;
}

function createFooterNode() {
  const footer = document.createElement('footer');
  footer.textContent = 'Copyright © Seth Martineau 2024 ';
  return footer
}

function createNavNode() {
  const nav = document.createElement('nav');
  const home = document.createElement('button');
  const menu = document.createElement('button');
  const about = document.createElement('button');
  
  home.textContent = 'Home';
  menu.textContent = 'Menu';
  about.textContent = 'About';

  home.addEventListener('click', e => {
    console.log('home clicked');

    const content = createContentNode();
    content.appendChild(createHomeNode());
    document.getElementById('content').replaceWith(content);
  });

  menu.addEventListener('click', e => {
    console.log('menu clicked');

    const content = createContentNode();
    content.appendChild(createMenuNode());
    document.getElementById('content').replaceWith(content);
  });

  about.addEventListener('click', e => {
    console.log('about clicked');

    const content = createContentNode();
    content.appendChild(createAboutNode());
    document.getElementById('content').replaceWith(content);
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(about);

  return nav;
}

export { initializePage };