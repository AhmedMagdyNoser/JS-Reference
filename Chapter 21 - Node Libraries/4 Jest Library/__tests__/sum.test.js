const { oldSum, newSum } = require('../sum');

describe.only("oldSum function tests", () => {
  test('0 numbers', () => { expect(oldSum()).toBe(0) })
  test('1 numbers', () => { expect(oldSum(5)).toBe(5) })
  test('2 numbers', () => { expect(oldSum(5, 5)).toBe(10) })
  test.skip('3 numbers', () => { expect(oldSum(5, 5, 5)).toBe(15) })
})

// you can specify which test to do using the 'only' and 'skip'

describe("newSum function tests", () => {
  it('0 numbers', () => { expect(newSum()).toBe(0) })
  it('1 numbers', () => { expect(newSum(5)).toBe(5) })
  it('2 numbers', () => { expect(newSum(5, 5)).toBe(10) })
  it('3 numbers', () => { expect(newSum(5, 5, 5)).toBe(15) })
})

// 'it' is the same as 'test'
