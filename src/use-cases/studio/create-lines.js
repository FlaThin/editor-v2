var widthSvg = svg.clientWidth;
var heightSvg = svg.clientHeight;
const grid = document.querySelector("#grid");

const lines = [];

function createLine(x1, y1, x2, y2) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke-width", "1");
  line.setAttribute("stroke", "#94a3b8");

  return line;
}

function update() {
  grid.innerHTML = "";
  widthSvg = svg.viewBox.baseVal.width;
  heightSvg = svg.viewBox.baseVal.height;
  var newY = svg.viewBox.baseVal.y;
  var newX = svg.viewBox.baseVal.x;

  spacing = 100;
  
  for (let x = newX; x <= widthSvg + newX; x += spacing) {
    const l = createLine(x, newY, x, (heightSvg + newY));
    grid.appendChild(l);
  }

  for (let y = newY; y <= heightSvg + newY; y += spacing) {
    const l = createLine(newX, y, (widthSvg + newX), y);
    grid.appendChild(l);
  }
}

// drawGrid();

// Redesenha a grade quando o tamanho da janela é alterado
// window.addEventListener("resize", function () {
//   widthSvg = svg.clientWidth;
//   heightSvg = svg.clientHeight;
//   drawGrid();
// });

// Redesenha a grade quando há zoom na página
// window.addEventListener("wheel", function (event) {
//   if (event.ctrlKey) {
//     widthSvg = svg.clientWidth;
//     heightSvg = svg.clientHeight;
//     drawGrid();
//   }
// });