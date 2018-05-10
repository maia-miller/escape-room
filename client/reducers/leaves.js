let initialState = false

export default function (state=initialState, action) {
  switch (action.type) {
    case 'HIDE_LEAVES':
      return true

    default:
      return state
  }
}
