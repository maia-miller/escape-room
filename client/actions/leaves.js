function hideLeaves(){
  return{
    type: 'HIDE_LEAVES',
    leaves: true
  }
}

export function disappearLeaves() {
  return(dispatch) => {
    dispatch(hideLeaves())
  }
}
