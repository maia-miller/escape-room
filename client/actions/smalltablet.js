function collectTablet() {
  return{
    type: 'SMALL_TABLET_COLLECTED',
  }
}

export function collectSmallTablet() {
  return(dispatch) => {
    dispatch(collectTablet())
  }
}
