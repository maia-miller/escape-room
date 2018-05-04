let initialState = {
  leaves: true
}

export default function (state=[], action) {
  switch (action.type) {
    case 'HIDE_LEAVES':
      return action.leaves

    default:
      return state
  }
}
