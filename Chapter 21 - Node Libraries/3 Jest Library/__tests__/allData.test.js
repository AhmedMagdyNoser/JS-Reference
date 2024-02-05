const allData = require("../allData")

// Matchers

test("Check If Array Contains 6 Elements 1st Method", () => {
  expect(allData.length).toBe(6);
});

test("Check If Array Contains 6 Elements 2nd Method", () => {
  expect(allData).toHaveLength(6);
});

test("Check If Array Contains Number 3", () => {
  expect(allData).toContain(3);
});

test("Check If Array Not Contains Number 6", () => {
  expect(allData).not.toContain(6);
});

test("Check If Array Not Contains Number Zero", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(0);
  }
});

test("Check If Array Contains Only Numbers - 1st Way", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBe(false);
  }
});

test("Check If Array Contains Only Numbers - 2nd Way", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});

test("Check If Array Contains Only Numbers - 3rd Way", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});

test("Check If Array First Element Is Larger Than 1", () => {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
});

test("Check If Array First Element Is Less Than 5", () => {
  expect(allData[0]).toBeLessThanOrEqual(5);
});

test("Check For Undefined", () => {
  let a;
  expect(a).toBeUndefined();
});

test("Check For Substring Inside String By RegExp", () => {
  let myString = "I Love Elzero Web School";
  expect(myString).toMatch(/Elzero/);
});

test("Check For Property Age", () => {
  let myObject = {
    name: "Osama",
    age: 37,
  };
  expect(myObject).toHaveProperty("age");
});

test("Check For Property Age Value Is 37", () => {
  let myObject = {
    name: "Osama",
    age: 38,
  };
  expect(myObject).toHaveProperty("age", 38);
});

// expect.anything() => Anything But Undefined + Null

test("Expect Anything", () => {
  let x = "A";
  expect("Osama").toEqual(expect.anything());
  expect(1).toEqual(expect.anything());
  expect([1, 2, 3, 4]).toEqual(expect.anything());
  expect(x).toEqual(expect.anything());
});

// expect.any(Constructor)

test("Expect Any Constructor", () => {
  expect("Osama").toEqual(expect.any(String));
});

// expect.arrayContaining(array)

test("Expect Array To Be Found In The Main Array", () => {
  const myArray = [1, 2, 3, 4, 5, 6];
  expect(myArray).toEqual(expect.arrayContaining([5, 3, 4, 6]));
});
