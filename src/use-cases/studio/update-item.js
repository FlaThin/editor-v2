export function updateItem(item, mutate) {
  const mutableObject = Object.entries(mutate);

  mutableObject.forEach(([key, value])=> {
    item.attributes[key].value = value;
  });
}