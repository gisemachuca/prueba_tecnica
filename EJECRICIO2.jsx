function encontrarIndices(array, objetivo) {
  const indices = [];

  // Creamos un objeto para almacenar los índices de los elementos que hemos visto
  const indicesVistos = {};

  // Recorremos el array
  for (let i = 0; i < array.length; i++) {
    // Calculamos el complemento necesario para que la sumatoria sea igual al objetivo
    const complemento = objetivo - array[i];

    // Verificamos si hemos visto el complemento previamente
    if (indicesVistos.hasOwnProperty(complemento)) {
      // Si hemos visto el complemento, guardamos ambos índices
      indices.splice(0, indices.length, indicesVistos[complemento], i);
    }

    // Guardamos el índice del elemento actual en el objeto de índices vistos
    indicesVistos[array[i]] = i;
  }

  return indices;
}

const array = [1, 2, 3, 4, 5];
const objetivo = 6;
const indices = encontrarIndices(array, objetivo);
console.log(indices); // Resultado esperado: [1, 3]
