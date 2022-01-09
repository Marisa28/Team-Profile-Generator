const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
test("Can set office number via constructor argument", () => {
  const inValue = 888;
  const e = new Manager("Marisa", 1, "marisa@marisa.com", inValue);
  expect(e.officeNumber).toBe(inValue);
});
test("getRole() should return \"Manager\"", () => {
  const inValue = "Manager";
  const e = new Manager("Marisa", 1, "marisa@marisa.com", 777);
  expect(e.getRole()).toBe(inValue);
});
test("Can get office number via getOffice()", () => {
  const inValue = 555;
  const e = new Manager("Marisa", 1, "marisa@marisa.com", inValue);
  expect(e.getOfficeNumber()).toBe(inValue);
});






