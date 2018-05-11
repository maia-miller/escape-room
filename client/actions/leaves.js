function hideLeaves(){
  return{
    type: 'HIDE_LEAVES',
    leaves: false
  }
}

export function disappearLeaves() {
  return(dispatch) => {
    dispatch(hideLeaves())
  }
}
