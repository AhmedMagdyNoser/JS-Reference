const sayHello = require('../sayHello');

test('Say Hello', () => {
  expect(sayHello()).toBe('Hello!')
})

test('Say hello to Ali', () => {
  expect(sayHello('Ali')).toBe('Hello Ali!');
})