const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
test("Can set github via constructor argument", () => {
  const inValue = "Marisa28";
  const e = new Engineer("Marisa", 1, "marisa@marisa.com", inValue);
  expect(e.github).toBe(inValue);
});
test("getRole() should return \"Engineer\"", () => {
  const inValue = "Engineer";
  const e = new Engineer("Marisa", 1, "marisa@marisa.com", "Marisa28");
  expect(e.getRole()).toBe(inValue);
});
test("Can get github via getGithub()", () => {
  const inValue = "Marisa28";
  const e = new Engineer("Marisa", 1, "marisa@marisa.com", inValue);
  expect(e.getGithub()).toBe(inValue);
});






