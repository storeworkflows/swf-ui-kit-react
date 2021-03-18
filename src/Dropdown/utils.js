export const  getItemById  = (id, items) => {
    let result = null;
    items.map( el => {
        if(el.id === id)
            result = el;
    })
    return result;
}

export const calculateScroll = (container, selectedItems) => {
    let result = container.scrollTop;
    let hasSelectedItems = selectedItems && selectedItems.length>0;
    if(container && hasSelectedItems){
        let selectedEl = container.querySelector(`div[data-key="${selectedItems[0]}"]`)
        let itemDimensions = selectedEl.getBoundingClientRect();
        let containerDimensions = container.getBoundingClientRect();

        let containerEndX = containerDimensions.y + containerDimensions.height;
        let itemEndX = itemDimensions.y + itemDimensions.height;

        if(itemEndX>containerEndX)
            result = itemDimensions.y - containerDimensions.y;
        else if(itemDimensions.y<containerDimensions.y)
            result = container.scrollTop - (containerDimensions.y - itemDimensions.y);
    }

    return result;
}