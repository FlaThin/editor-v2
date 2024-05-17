export function render(image) {
  const view = svg.viewBox.baseVal;

  const newViewBoxWidth = (view.width * image.getBBox().width) / 776;
  const newViewBoxHeight = newViewBoxWidth / 1.7777;

  view.width = newViewBoxWidth;
  view.height = newViewBoxHeight;
}