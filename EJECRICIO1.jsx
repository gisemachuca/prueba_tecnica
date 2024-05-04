function convertirPalabras(frase) {
  // Dividir la frase en palabras separadas por espacios
  const palabras = frase.split(" ");

  // Mapear sobre cada palabra y convertir la primera letra en minúscula y el resto en mayúscula
  const palabrasConvertidas = palabras.map((palabra) => {
    return palabra.charAt(0).toLowerCase() + palabra.slice(1).toUpperCase();
  });

  // Unir las palabras convertidas en una nueva frase
  const nuevaFrase = palabrasConvertidas.join(" ");

  return nuevaFrase;
}

const fraseOriginal = "Hola Mundo";
const fraseConvertida = convertirPalabras(fraseOriginal);
console.log(fraseConvertida); // Resultado: "hOLA mUNDO"
