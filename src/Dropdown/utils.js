export const  getItemById  = (id, items) => {
    let result = null;
    items.map( el => {
        if(el.id === id)
            result = el;
    })
    return result;
}
