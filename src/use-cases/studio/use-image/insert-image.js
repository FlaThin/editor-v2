export function insertImage(url, x, y) {

  var image = document.createElementNS("http://www.w3.org/2000/svg", "image");

  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", url);
  image.setAttribute("x", "0");
  image.setAttribute("draggable", "false");
  image.setAttribute("y", "0");
  image.setAttribute("width", "1920");
  image.setAttribute("height", "1080");

  svg.appendChild(image);

  image.addEventListener("click", renderBorderSelect)
  return image
}

 function renderBorderSelect(element, event) {
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
};