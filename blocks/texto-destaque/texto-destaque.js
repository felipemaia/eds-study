// blocks/texto-destaque/texto-destaque.js
export default function decorate(block) {
  const content = block.querySelector(':scope > div > div');
  if (!content) return;

  content.classList.add('texto-destaque-conteudo');

  const heading = content.querySelector('h1, h2, h3, h4, h5, h6');
  const eyebrow = heading?.previousElementSibling;
  if (eyebrow?.tagName === 'P') {
    eyebrow.classList.add('texto-destaque-etiqueta');
  }

  // remove os wrappers de linha/coluna, que aqui não têm significado
  block.replaceChildren(content);
}