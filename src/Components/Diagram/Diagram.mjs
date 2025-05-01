class Diagram {
  renderDiagram() {
    const container = document.querySelector(".app");
    container.innerHTML = `
    <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="18"
            markerHeight="10"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 9 3.5, 0 7" fill="#333" />
          </marker>
        </defs>

        <!-- q0 -->
        <g class="state" id="q0" transform="translate(120,80)">
          <circle r="30" />
          <text>q₀</text>
        </g>

        <!-- q1 loop a -->
        <g class="state" id="q1" transform="translate(380,80)">
          <circle r="30" />
          <text>q₁</text>

          <path
            class="arrow"
            d="M 0,-30 
       C 40,-60 -80,-60 -10,-30"
            data-from="q1"
            data-to="q1"
            data-symbol="a"
          />
          <text class="transition-label" x="-10" y="-70">a</text>
        </g>

        <!-- q3 loop a,b -->
        <g class="state" id="q3" transform="translate(120,320)">
          <circle r="30" />
          <text>q₃</text>

          <path
            class="arrow"
            d="M -30,0 
       C -130,30 -60,-90 -10,-30"
            data-from="q3"
            data-to="q3"
            data-symbol="a,b"
          />
          <text class="transition-label" x="-100" y="-15">a,b</text>
        </g>

        <!-- q2 (aceptador) -->
        <g class="state double" id="q2" transform="translate(380,320)">
          <circle r="30" />
          <circle r="26" />
          <text>q₂</text>
        </g>

        <!-- Transiciones entre distintos estados -->
        <path
          class="arrow"
          d="M 150,80 H 350"
          data-from="q0"
          data-to="q1"
          data-symbol="a"
        />
        <text class="transition-label" x="250" y="60">a</text>

        <path
          class="arrow"
          d="M 120,110 V 300"
          data-from="q0"
          data-to="q3"
          data-symbol="b"
        />
        <text class="transition-label" x="100" y="205">b</text>

        <path
          class="arrow"
          d="M 380,110 V 300"
          data-from="q1"
          data-to="q2"
          data-symbol="b"
        />
        <text class="transition-label" x="400" y="205">b</text>

        <path
          class="arrow"
          d="M 350,320 H 150"
          data-from="q2"
          data-to="q3"
          data-symbol="a,b"
        />
        <text class="transition-label" x="250" y="300">a,b</text>
      </svg>
    `;
  }
}

const instance = new Diagram();
export const renderDiagram = instance.renderDiagram.bind(instance);
