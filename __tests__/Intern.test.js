const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
test("Can set school via constructor argument", () => {
  const inValue = "Rutgers";
  const e = new Intern ("Marisa", 1, "marisa@marisa.com", inValue);
  expect(e.school).toBe(inValue);
});
test("getRole() should return \"intern\"", () => {
  const inValue = "Intern";
  const e = new Intern("Marisa", 1, "marisa@marisa.com", "Rutgers");
  expect(e.getRole()).toBe(inValue);
});
test("Can get office number via getOffice()", () => {
  const inValue = "Rutgers";
  const e = new Intern("Marisa", 1, "marisa@marisa.com", inValue);
  expect(e.getSchool()).toBe(inValue);
});





