let initialState = false

export default function(state=initialState, action) {
  switch(action.type) {
    case 'TOGGLE_LARGE_TABLET':
      return !state

    default:
      return state
  }
}
