export function updateItems(list) {
  return{
    type: 'UPDATE_ITEMS',
    items: list,
  };
};