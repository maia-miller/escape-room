import largetablet from '../../../client/reducers/largetablet'

describe ('largetablet reducer', () => {
  it ('should return initial state', () => {
    expect (largetablet(undefined, {})).toEqual(false)
  })
})

it('should handle TOGGLE_LARGE_TABLET', () => {
  const action = {
    type: 'TOGGLE_LARGE_TABLET'
  }
  expect(largetablet(false, action)).toEqual(true)
})
