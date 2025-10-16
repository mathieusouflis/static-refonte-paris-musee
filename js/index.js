export function renderElement(selector, templatePath, globalSetName) {
  const elements = document.querySelectorAll(selector);

  const setName =
    globalSetName ||
    `__renderedElements_${selector.replace(/[^a-zA-Z0-9]/g, "_")}`; // Replace any non-alphanumeric characters with underscores
  const renderedElements = window[setName] || (window[setName] = new WeakSet());

  if (elements.length > 0) {
    elements.forEach((el) => {
      if (!renderedElements.has(el)) {
        fetch(templatePath)
          .then((response) => response.text())
          .then((html) => {
            const fragment = document
              .createRange()
              .createContextualFragment(html);
            console.log(fragment.childNodes.values);
            el.parentElement.insertBefore(fragment, el.nextSibling);
          })
          .catch((error) => {
            console.error("Error loading HTML file:", error);
          });
        renderedElements.add(el);
      }
    });
  } else {
    console.error(
      `Component script cannot be loaded for selector: ${selector}`,
    );
  }
}
