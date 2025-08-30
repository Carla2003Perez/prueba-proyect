const { esMayorDeEdad } = require("./mayor-edad");

function puedeAprobarPrestamo(persona) {
  if (!persona || typeof persona !== "object") {
    throw new Error("Persona invalida");
  }

  const { edad, ocupacion, tieneDeudas } = persona;

  
  esMayorDeEdad(edad);

  switch (ocupacion) {
    case "estudiante":
      return false;
    case "empleado":
      return true;
    case "retirado":
      return !tieneDeudas;
    default:
      throw new Error("Ocupacion invalida");
  }
}

module.exports = { puedeAprobarPrestamo };
