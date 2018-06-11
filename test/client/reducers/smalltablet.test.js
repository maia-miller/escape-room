import smalltablet from '../../../client/reducers/smalltablet'

describe ('smalltablet reducer', () => {
  it ('should return initial state', () => {
    expect (smalltablet(undefined, {})).toEqual(false)
  })
})

it('should handle SMALL_TABLET_COLLECTED', () => {
  const action = {
    type: 'SMALL_TABLET_COLLECTED'
  }
  expect(smalltablet(false, action)).toEqual(true)
})
