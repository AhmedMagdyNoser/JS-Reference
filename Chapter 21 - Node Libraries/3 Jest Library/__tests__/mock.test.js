// Mock functions are special functions used in software testing and development to simulate the behavior of other functions or components within a system.
// They are created to imitate the behavior of real functions or objects, but without the complexity or external dependencies that come with those real components.

test("Mock Function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("Osama")).toBe("Hello Osama");
  expect(mocker("Ahmed")).toBe("Hello Ahmed");
  expect(mocker("Sayed")).toBe("Hello Sayed");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("Ahmed");
  expect(mocker).toHaveBeenLastCalledWith("Sayed");
});