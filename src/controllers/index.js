import { updateItem } from "../use-cases/studio/update-item";
import { insertImage } from "../use-cases/studio/use-image/insert-image";
import { insertText } from "../use-cases/studio/use-text/insert-text";
import background from "../../public/kamisato-ayato-genshin-impact.jpg";

const image = insertImage(background);

const text = insertText("Twitter");

updateItem(text, {
  "font-size": 124,
  "x": 500,
  "y": 100
});

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
