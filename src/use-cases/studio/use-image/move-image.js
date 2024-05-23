import { updateItem } from "../update-item";

/**
 * @param {SVGImageElement} image 
 */
export function moveImage(image) {

  const itemDragg = {
    current: null
  }

  image.addEventListener("mousedown", function (e) { 
    itemDragg.current = image
  });

  image.addEventListener("mousemove", function (e) {
    if(itemDragg.current) {
      updateItem(image, {
        x: ((svg.viewBox.baseVal.width * e.layerX) / svg.width.baseVal.value) - image.getBBox().width / 2,
        y: e.layerY
      });
    }
  });

  image.addEventListener("mouseup", function (e) { 
    itemDragg.current = null
  });
}