function createHomeNode() {
  const homeNode = document.createElement('div');
  homeNode.id = 'home';

  const title = document.createElement('h2');
  title.textContent = 'Home';

  const message = document.createElement('p');
  message.textContent = 'Welcome to Facsimilie Coffee';
  homeNode.appendChild(title);
  homeNode.appendChild(message);

  return homeNode;
}

export { createHomeNode };