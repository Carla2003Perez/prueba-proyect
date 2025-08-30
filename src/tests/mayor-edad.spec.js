const { esMayorDeEdad } = require("../domain/mayor-edad");

describe("esMayorDeEdad", () => {
  test(" edad 0 o numero negativo, falso", () => {
    expect(esMayorDeEdad(0)).toBe(false);
  });

  test("edad 17, falso", () => {
    expect(esMayorDeEdad(17)).toBe(false);
  });

  test(" edad 18, verdadero", () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  test("edad 30, verdadero", () => {
    expect(esMayorDeEdad(30)).toBe(true);
  });

  test("si edad es negativa", () => {
    expect(() => esMayorDeEdad(-1)).toThrow("Edad invalida");
  });

  test("si edad es NaN", () => {
    expect(() => esMayorDeEdad(NaN)).toThrow("Edad invalida");
  });

  test("si edad es null", () => {
    expect(() => esMayorDeEdad(null)).toThrow("Edad invalida");
  });

  test("si edad es string", () => {
    expect(() => esMayorDeEdad("18")).toThrow("Edad invalida");
  });
});
