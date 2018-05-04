let initialState = {
  smalltabletfound: false
}

export default function (state='', action) {
  switch (action.type) {
    case 'SMALL_TABLET_COLLECTED':
      return action.smalltabletfound

    default:
      return state
  }
}
