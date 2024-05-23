var svgContainer = document.querySelector(".editor");
var svg = document.getElementById("studio");
var viewBox = svg.viewBox.baseVal;
var isDragging = false;
var startX, startY;
var startViewBoxX, startViewBoxY;
svgContainer.addEventListener("wheel", function(event) {
    event.preventDefault();
    var zoomIntensity = 0.1;
    var delta = event.deltaY > 0 ? -1 : 1;
    var scaleFactor = Math.pow(1 + zoomIntensity, delta);
    var oldWidth = viewBox.width;
    var oldHeight = viewBox.height;
    var mouseX = event.clientX - svg.getBoundingClientRect().left;
    var mouseY = event.clientY - svg.getBoundingClientRect().top;
    viewBox.width *= scaleFactor;
    viewBox.height *= scaleFactor;
    viewBox.x -= (viewBox.width - oldWidth) * (mouseX / svg.width.baseVal.value);
    viewBox.y -= (viewBox.height - oldHeight) * (mouseY / svg.height.baseVal.value);
    update();
});
svgContainer.addEventListener("mousedown", function(event) {
    if (event.button === 0 && event.ctrlKey) {
        startX = event.layerX;
        startY = event.layerY;
        startViewBoxX = viewBox.x;
        startViewBoxY = viewBox.y;
        isDragging = true;
    }
});
svgContainer.addEventListener("mouseup", function(event) {
    if (event.button === 0) isDragging = false;
});
window.addEventListener("mousemove", function(event) {
    if (isDragging) {
        var deltaX = Math.round(event.layerX - startX);
        var deltaY = Math.round(event.layerY - startY);
        viewBox.x = startViewBoxX - deltaX;
        viewBox.y = startViewBoxY - deltaY;
        update();
    }
});

//# sourceMappingURL=index.a649d279.js.map
