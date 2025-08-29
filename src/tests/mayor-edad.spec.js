const { esMayorDeEdad } = require("../domain/mayor-edad");

describe("esMayorDeEdad", () => {
  test("retorna false para edad 0", () => {
    expect(esMayorDeEdad(0)).toBe(false);
  });

  test("retorna false para edad 17", () => {
    expect(esMayorDeEdad(17)).toBe(false);
  });

  test("retorna true para edad 18", () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  test("retorna true para edad 30", () => {
    expect(esMayorDeEdad(30)).toBe(true);
  });

  test("lanza error si edad es negativa", () => {
    expect(() => esMayorDeEdad(-1)).toThrow("Edad invalida");
  });

  test("lanza error si edad es NaN", () => {
    expect(() => esMayorDeEdad(NaN)).toThrow("Edad invalida");
  });

  test("lanza error si edad es null", () => {
    expect(() => esMayorDeEdad(null)).toThrow("Edad invalida");
  });

  test("lanza error si edad es string", () => {
    expect(() => esMayorDeEdad("18")).toThrow("Edad invalida");
  });
});
