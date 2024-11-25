const DomTool = function() {

  function createText(tag, text) {
    const node = document.createElement(tag);
    node.textContent = text;
    return node;
  }

  return { createText }
}();

export { DomTool };