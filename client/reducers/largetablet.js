function toggleVisible (state) {
  var newState = Object.assign({}, state)
  newState = !newState
  return newState;
}

let initialState= false

export default function(state=initialState, action) {
  switch(action.type) {
    case 'TOGGLE_LARGE_TABLET':
      return toggleVisible(state)

    default:
      return state
  }
}
