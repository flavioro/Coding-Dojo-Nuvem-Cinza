/**
 * Funcao responsavel por gerar numeros aleatórios
 * https://www.w3schools.com/js/js_random.asp
 * Math.random()
 * Math.floor()
 */

function RandomNumber(positions: number[], quantity: number): number[] {
  const random: number[] = [];
  const max = positions.length;

  for (let j = 0; j < quantity; j += 1) {
    const position = Math.floor(Math.random() * (max - 1)) + 1;

    // se numero ja existe, ignora
    if (random.indexOf(position) >= 0) {
      j -= 1;
    } else if (positions[position] > 0) {
      // insere posicao no array de positions
      random.push(positions[position]);
      // retira posicao para nao repetir
      positions.splice(position, 1);
    } else {
      /**
       * Condição inserida
       * para prevenir erro de posicao inexistente
       */
      j -= 1;
    }
  }
  return random;
}

export default RandomNumber;
