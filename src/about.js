import { DomTool } from "./dom_tool";

export default (function() {
  const paragraphs = (() => {
    const text = [
      "Fictional cafe.",
      "A restaurant page project as outlined in The Odin Project.",
    ]

    return text.map(t => DomTool.createText('p', t));
  })();

  const subcontent = document.createElement('div');
  subcontent.classList.add('subcontent');
  subcontent.append(...paragraphs);
  
  return [DomTool.createText('h2', 'About'), document.createElement('hr'), subcontent];;
})();