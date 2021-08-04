export const getItemById = (id, items) => {
  let result = null;
  items.map((el) => {
    if (el.id === id) result = el;
  });
  return result;
};

export const calculateScroll = (container, selectedItems) => {
  let result = container.scrollTop;
  const hasSelectedItems = selectedItems && selectedItems.length > 0;
  if (container && hasSelectedItems) {
    const selectedEl = container.querySelector(`div[data-key="${selectedItems[0]}"]`);
    const itemDimensions = selectedEl.getBoundingClientRect();
    const containerDimensions = container.getBoundingClientRect();

    const containerEndX = containerDimensions.y + containerDimensions.height;
    const itemEndX = itemDimensions.y + itemDimensions.height;

    if (itemEndX > containerEndX) result = itemDimensions.y - containerDimensions.y;
    else if (itemDimensions.y < containerDimensions.y) result = container.scrollTop - (containerDimensions.y - itemDimensions.y);
  }

  return result;
};
