function createAboutNode() {
  const aboutNode = document.createElement('div');
  const title = document.createElement('h2');

  title.textContent = 'About';
  aboutNode.appendChild(title);

  const text = [
    "Web page for a fictional cafe",
    "Created for the Restaurant Page project as found in The Odin Project Curriculum"
  ];

  text.forEach(string => {
    const p = document.createElement('p');
    p.textContent = string;
    aboutNode.appendChild(p);
  });

  return aboutNode;
}

export { createAboutNode };