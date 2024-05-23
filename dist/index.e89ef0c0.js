const data = [
    {
        text: "Flexible",
        subItems: [
            {
                text: "Team a",
                subItems: [
                    {
                        text: "Name",
                        type: "text"
                    },
                    {
                        text: "Logo",
                        type: "image"
                    },
                    {
                        text: "Odd",
                        type: "text"
                    }
                ]
            },
            {
                text: "Team b",
                subItems: []
            }
        ]
    },
    {
        text: "Fixed",
        subItems: []
    },
    {
        text: "Custom",
        subItems: []
    }
];
const wrapperLayers = document.querySelector(".layer-contents");
function renderItems(items, padding = 28) {
    items.forEach((item)=>{
        createItem(padding, item);
        if (item.subItems && item.subItems.length > 0) renderItems(item.subItems, padding + 14);
    });
}
function renderData(data) {
    data.forEach((row)=>{
        createItem(null, row);
        renderItems(row.subItems, 28);
    });
}
function createItem(padding, itemPrimitive) {
    const { text, subItems, type } = itemPrimitive;
    const item = document.createElement("div");
    console.log(type);
    if (type !== undefined) {
        item.setAttribute("draggable", "true");
        item.addEventListener("dragstart", ()=>{
            console.log("drag");
        });
        item.addEventListener("dragend", ()=>{
            console.log("end");
        });
    }
    if (padding) item.style.padding = `12px ${padding}px`;
    item.classList.add("layer-item");
    const iconContent = createIcon(type);
    const content = `
    <header>
      ${iconContent}
      <span>
        ${text}
      </span>
    </header>`;
    item.innerHTML = content;
    wrapperLayers.append(item);
}
function createIcon(type) {
    switch(type){
        case "text":
            return `
        <div class="icon archive">
          <i class="ph ph-text-t"></i>
        </div>`;
        case "image":
            return `
        <div class="icon archive">
          <i class="ph ph-image"></i>
        </div>`;
        default:
            return `
      <div class="icon expand">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 512">
          <path
            d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
        </svg>
      </div>`;
    }
}
renderData(data);

//# sourceMappingURL=index.e89ef0c0.js.map
