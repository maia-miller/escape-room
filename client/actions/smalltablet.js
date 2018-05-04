function collectTablet() {
  return{
    type: 'SMALL_TABLET_COLLECTED',
    smalltabletfound: true
  }
}

export function collectSmallTablet() {
  return(dispatch) => {
    dispatch(collectTablet())
  }
}
