// Create your own matcher

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `${received} Is Larger Than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Error: Expected ${received} To Be Larger Than ${target}`,
        pass: false,
      };
    }
  },
});

test("Check If Number Is Larger Than Other Number", () => {
  expect(10).toBeLargerThan(9);
});

expect.extend({
  toBeBetween(received, start, end) {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () => `${received} Is Between ${start} And ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Error: Expected ${received} To Be Between ${start} And ${end}`,
        pass: false,
      };
    }
  },
});

test("Check If Year Is Between Years Range", () => {
  expect(1982).toBeBetween(1900, 2020);
});