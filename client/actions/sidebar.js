export const addItem = (item) => {
  return {
    type: 'NEW_ITEM',
    item
  }
}

export function changeItem(data) {
  return (dispatch) => {
    dispatch(addItem(data))
  }
}
