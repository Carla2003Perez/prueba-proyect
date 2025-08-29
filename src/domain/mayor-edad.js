function esMayorDeEdad (edad)  {
  if (typeof edad !== "number" || isNaN(edad)) {
    throw new Error("Edad invalida");/**numero no instruc */
  }
   if (edad < 0) {
    throw new Error("Edad invalida");/*negativo* */
  }
  return edad >= 18;
};

module.exports = { esMayorDeEdad };
