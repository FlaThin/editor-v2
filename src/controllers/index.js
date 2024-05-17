import { updateItem } from "../use-cases/studio/update-item";
import { insertImage } from "../use-cases/studio/use-image/insert-image";
import { insertText } from "../use-cases/studio/use-text/insert-text";
import background from "../../public/kamisato-ayato-genshin-impact.jpg";
import { render } from "../use-cases/studio/use-image/render";

const image = insertImage(background);

const text = insertText("Twitter");

updateItem(text, {
  "font-size": 124,
  "x": 500,
  "y": 100
});

render(image)

console.log(776 / 1.7);

console.log(svg.viewBox.baseVal.height / 2)
console.log(image.width.baseVal)
const posy = svg.viewBox.baseVal.height / 2 - (776 / 1.7) ;

console.log(svg.viewBox.baseVal.width )
const posx = (svg.viewBox.baseVal.width * 312) / svg.width.baseVal.value;

image.setAttribute("x", posx);
image.setAttribute("y", posy);



image.addEventListener("click", (element, event) => {
  var bbox = image.getBBox();
  
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", bbox.x); // ajuste para a largura da borda
  rect.setAttribute("y", bbox.y); // ajuste para a largura da borda
  rect.setAttribute("width", bbox.width); // ajuste para a largura da borda
  rect.setAttribute("height", bbox.height); // ajuste para a largura da borda
  rect.setAttribute("fill", "transparent");
  rect.setAttribute("stroke", "#64748b");
  rect.setAttribute("stroke-width", "4");

  svg.appendChild(rect);
});
