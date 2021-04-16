export const  getItemById  = (id, items) => {
    return items.find(el => el.id ===id);
}

export const getDisplayValue = (selectedItems = [], items = [], placeholder = "") => {
    switch (true){
        case (selectedItems.length === 1):
            let selectedId = getItemById(selectedItems[0], items);
            return selectedId ? selectedId.label : placeholder;
        case (selectedItems.length>1):
            return `${selectedItems.length} items selected`;
        default:
            return placeholder;
    }
}

export const getCorrectSelected = (items, selectedItems) => {
    if(items && selectedItems)
        return selectedItems.filter(el => (getItemById(el, items) !== undefined))

    return [];
}
