let initialState = false

export default function (state=initialState, action) {
  switch (action.type) {
    case 'SMALL_TABLET_COLLECTED':
      return true

    default:
      return state
  }
}
