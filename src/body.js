import { default as Home } from "./home";
import { default as Menu } from "./menu";
import { default as About } from "./about";
import { DomTool } from "./dom_tool";

export default (function() {
  const nav = function() {
    const nav = document.createElement('nav');
    const lhr = document.createElement('div');
    const rhr = document.createElement('div');
    nav.append(
      lhr,
      createButton('Home', Home),
      createButton('Menu', Menu),
      createButton('About', About),
      rhr
    );
  
    return nav;
  }();

  const header = function() {
    const header = document.createElement('header');
    const bannerText = document.createElement('h1');
    bannerText.textContent = 'Facsimilie Coffee';
    header.appendChild(bannerText);
    header.appendChild(nav);
    return header;
  }();

  function createContent(page) {
    const div = document.createElement('div');
    div.id = 'content';
    page.forEach(node => {
      div.appendChild(node);
    });
    return div;
  }

  function createButton(label, page) {
    const button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', () => {
      const content = createContent(page);
      document.getElementById('content').replaceWith(content);
    });

   return button;
  };

  const footer = function() {
    const footer = document.createElement('footer');
    footer.appendChild(DomTool.createText('p', 'Copyright © Seth Martineau 2024'));
    return footer
  }();

  function init() {
    const body = document.querySelector('body');
    body.appendChild(header);
    body.appendChild(createContent(Menu));
    body.appendChild(footer);
  }
  
  return { init };
})();

