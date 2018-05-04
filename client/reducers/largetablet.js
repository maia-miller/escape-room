function toggleVisible (state) {
  var newState = Object.assign({}, state)
  newState = !newState
  return newState;
}


export default function(state='', action) {
  switch(action.type) {
    case 'TOGGLE_LARGE_TABLET':
      return toggleVisible(state)

    default:
      return state
  }
}
