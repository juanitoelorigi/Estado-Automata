import { renderDiagram } from "../../Diagram/Diagram.mjs";
import { renderFormDiagram } from "../../Form/FormDiagram/FormDiagram.mjs";

class DiagramPage {
  renderDiagramPage() {
    renderDiagram();
    renderFormDiagram();
  }
}

const instance = new DiagramPage();
export const renderDiagramPage = instance.renderDiagramPage.bind(instance);
