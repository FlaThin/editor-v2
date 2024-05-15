export function insertText(content, mouseX, MouseY) {
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("font-size", "24")
  text.setAttribute("y", mouseX)
  text.setAttribute("x", MouseY)
  text.setAttribute("fill", "black")
  text.setAttribute("dominant-baseline", "middle")
  text.setAttribute("text-anchor", "middle")
  text.innerHTML = content;
  svg.appendChild(text)
  return text
}