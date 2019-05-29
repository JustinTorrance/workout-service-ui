
import * as actions from './index'

describe('setError', () => {
  it('should return a type of SET_ERROR and an error message', () => {
    const message = 'Something went wrong'
    const result = actions.setError(message)
    const expected = {
      type: 'SET_ERROR',
      error: 'Something went wrong'
    }
    expect(result).toEqual(expected)
  })
})