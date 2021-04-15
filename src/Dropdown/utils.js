export const  getItemById  = (id, items) => {
    let result = null;
    items.map( el => {
        if(el.id === id)
            result = el;
    })
    return result;
}

export const getDisplayValue = (selectedItems, items, placeholder) => {
    switch (true){
        case (selectedItems?.length === 1):
            return getItemById(selectedItems[0], items).label;
        case (selectedItems?.length>1):
            return `${selectedItems.length} items selected`;
        case (placeholder !== undefined):
            return placeholder
        default:
            return "";
    }
}

export const getCorrectSelected = (items, selectedItems) => {
    let result = [];
    if(items && selectedItems){
        selectedItems.map(el => {
            let findEl = getItemById(el, items);
            if(findEl !== null)
                result.push(el);
        })
    }
    return result;
}
