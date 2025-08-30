function esMayorDeEdad (edad)  {
  if (typeof edad !== "number" || isNaN(edad)) {
    throw new Error("Edad invalida");/**tiene que ser numero */
  }
   if (edad < 0) {
    throw new Error("Edad invalida");/*numeros negativos no pueden */
  }
  return edad >= 18;
};

module.exports = { esMayorDeEdad };
