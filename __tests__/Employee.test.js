const Employee = require("../lib/Employee");
test("Can construct employee object", () => {
  const name = "Marisa";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test("Can set id", () => {
  const testValue = 100;
  const e = new Employee("Marisa", testValue);
  expect(e.id).toBe(testValue);
});
test("Can set email", () => {
  const testValue = "marisa@marisa.com";
  const e = new Employee("Marisa", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Can get name", () => {
  const testValue = "Marisa";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get", () => {
  const testValue = 120;
  const e = new Employee("Marisa", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email ", () => {
  const testValue = "marisa@marisa.com";
  const e = new Employee("Marisa", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Rosell", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});