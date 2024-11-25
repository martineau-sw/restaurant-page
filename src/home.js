import { DomTool } from "./dom_tool";

export default (function() {
  const paragraphs = (() => {
    const text = [
      "Welcome to Facsimilie Coffee"
    ];
    
    return text.map(t => DomTool.createText('p', t));
  })();

  const subcontent = document.createElement('div');
  subcontent.classList.add('subcontent');
  subcontent.append(...paragraphs);

  return [ DomTool.createText('h2', 'Home'), document.createElement('hr'), subcontent];
})();