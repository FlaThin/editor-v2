export function insertImage(url, x, y) {

  var image = document.createElementNS("http://www.w3.org/2000/svg", "image");

  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", url);
  image.setAttribute("x", "0");
  image.setAttribute("draggable", "false");
  image.setAttribute("y", "0");
  image.setAttribute("width", "1920");
  image.setAttribute("height", "1080");

  svg.appendChild(image);
  return image
}