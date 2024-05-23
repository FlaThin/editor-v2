import { updateItem } from "../use-cases/studio/update-item";
import { insertImage } from "../use-cases/studio/use-image/insert-image";
import { insertText } from "../use-cases/studio/use-text/insert-text";
import background from "../../public/kamisato-ayato-genshin-impact.jpg";
import { render } from "../use-cases/studio/use-image/render";
import { moveImage } from "../use-cases/studio/use-image/move-image";

const image = insertImage(background);

const text = insertText("Twitter");

updateItem(text, {
  "font-size": 124,
  "x": 500,
  "y": 100
});

render(image)

moveImage(image)

const posy = svg.viewBox.baseVal.height / 2 - (776 / 1.7) ;

const posx = (svg.viewBox.baseVal.width * 312) / svg.width.baseVal.value;

image.setAttribute("x", posx);
image.setAttribute("y", posy);


