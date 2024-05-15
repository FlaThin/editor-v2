var widthSvg = svg.clientWidth;
var heightSvg = svg.clientHeight;
const grid = document.querySelector("#grid");
var spacing = widthSvg / 20;
const lines = [];
function drawGrid() {
    for(let x = spacing; x <= widthSvg; x += spacing){
        const l = createLine(x, 0, x, heightSvg);
        grid.appendChild(l);
    }
    for(let y = spacing; y <= heightSvg; y += spacing){
        const l = createLine(0, y, widthSvg, y);
        grid.appendChild(l);
    }
}
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
    console.log(widthSvg, heightSvg);
    spacing = widthSvg / 20;
    for(let x = newX; x <= widthSvg; x += spacing){
        const l = createLine(x, newY, x, heightSvg);
        grid.appendChild(l);
    }
    for(let y = newY; y <= heightSvg; y += spacing){
        const l = createLine(newX, y, widthSvg, y);
        grid.appendChild(l);
    }
}
drawGrid(); // Redesenha a grade quando o tamanho da janela é alterado
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

//# sourceMappingURL=index.c2003694.js.map
