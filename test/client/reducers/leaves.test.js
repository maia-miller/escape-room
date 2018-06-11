import leaves from '../../../client/reducers/leaves'

describe ('leaves reducer', () => {
  it ('should return initial state', () => {
    expect (leaves(undefined, {})).toEqual(false)
  })
})

it('should handle HIDE_LEAVES', () => {
  const action = {
    type: 'HIDE_LEAVES'
  }
  expect(leaves(false, action)).toEqual(true)
})
