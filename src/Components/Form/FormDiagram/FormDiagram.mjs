class FormDiagram {
  renderFormDiagram() {
    const container = document.querySelector(".app");
    const element = document.createElement("container_Input");
    element.innerHTML = `
    <label>Cadena</label>
      <br />
      <input id="cadena" class="input" placeholder="ej: aaba" />
      <label class="text2"
        >La cadena debe contener <strong>a o b</strong>, hasta donde sea
        conveniente</label
      >
      <button id="runBtn">Ejecutar</button>

      <div id="result"></div>
    `;
    container.appendChild(element);
  }
}

const instance = new FormDiagram();
export const renderFormDiagram = instance.renderFormDiagram.bind(instance);
