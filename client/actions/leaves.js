function hideLeaves(){
  return{
    type: 'HIDE_LEAVES',
  }
}

export function disappearLeaves() {
  return(dispatch) => {
    dispatch(hideLeaves())
  }
}
