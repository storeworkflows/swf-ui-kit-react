import { DROPDOWN } from './constants';

export const getItemById = (id, items) => items.find((el) => el.id === id);

export const getDisplayValue = (selectedItems = [], items = [], placeholder = '') => {
  switch (true) {
    case (selectedItems.length === 1):
      const selectedId = getItemById(selectedItems[0], items);
      return selectedId ? selectedId.label : placeholder;
    case (selectedItems.length > 1):
      return `${selectedItems.length} items selected`;
    default:
      return placeholder;
  }
};

export const getCorrectSelected = (items, selectedItems) => {
  if (items && selectedItems) return selectedItems.filter((el) => getItemById(el, items));

  return [];
};

export const getUpdatedSelectedItems = (selectsItemsValue, select, id) => {
  switch (select) {
    case DROPDOWN.SELECT.SINGLE:
      return (selectsItemsValue[0] === id) ? [] : [id];
    case DROPDOWN.SELECT.MULTI:
      return (selectsItemsValue.includes(id))
        ? selectsItemsValue.filter((currentId) => currentId !== id)
        : selectsItemsValue.concat([id]);
    default:
      return [];
  }
};
