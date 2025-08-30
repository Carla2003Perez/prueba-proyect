const { puedeAprobarPrestamo } = require("../domain/prestamo");

describe("puedeAprobarPrestamo", () => {
  test("estudiante sin deudas NO aprueba", () => {
    expect(puedeAprobarPrestamo({ edad: 20, ocupacion: "estudiante", tieneDeudas: false })).toBe(false);
  });

  test("empleado sin deudas aprueba", () => {
    expect(puedeAprobarPrestamo({ edad: 25, ocupacion: "empleado", tieneDeudas: false })).toBe(true);
  });

  test("empleado con deudas aprueba igual", () => {
    expect(puedeAprobarPrestamo({ edad: 30, ocupacion: "empleado", tieneDeudas: true })).toBe(true);
  });

  test("retirado sin deudas aprueba", () => {
    expect(puedeAprobarPrestamo({ edad: 65, ocupacion: "retirado", tieneDeudas: false })).toBe(true);
  });

  test("retirado con deudas NO aprueba", () => {
    expect(puedeAprobarPrestamo({ edad: 70, ocupacion: "retirado", tieneDeudas: true })).toBe(false);
  });

  test("lanza error si persona es invalida", () => {
    expect(() => puedeAprobarPrestamo(null)).toThrow("Persona invalida");
  });

  test("lanza error si ocupacion no es valida", () => {
    expect(() => puedeAprobarPrestamo({ edad: 30, ocupacion: "freelancer", tieneDeudas: false })).toThrow("Ocupacion invalida");
  });
});
