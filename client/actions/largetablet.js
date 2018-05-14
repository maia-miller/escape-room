function toggleTablet() {
  return{
    type: 'TOGGLE_LARGE_TABLET'
  }
}

export function toggleLargeTablet() {
  return(dispatch) => {
    dispatch(toggleTablet())
  }
}
