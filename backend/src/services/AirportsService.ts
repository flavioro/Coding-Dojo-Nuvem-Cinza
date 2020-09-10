import AppError from '../errors/AppError';

interface Response {
  min: number;
  max: number;
}

class AirportsService {
  public execute(
    area: string[][],
    mapArea: string[][],
    lines: number,
    columns: number,
    airports: number,
  ): Response {
    try {
      let count = 0;
      let allAirPorts = false;

      const counts: number[] = [];
      let aux: string[] = [];

      const calculateArea: string[][] = { ...area };

      /**
       * Loop até localiar todos os aeroportos
       */

      while (allAirPorts === false) {
        for (let row = 0; row < lines; row += 1) {
          for (let column = 0; column < columns; column += 1) {
            /**
             * Se existir núvem na posição, expande para todos os 8
             * quadrados adjacentes
             */
            if (calculateArea[row][column] === `c${count}`) {
              /**
               *  Coluna lateral direita
               */
              if (column + 1 < columns) {
                calculateArea[row][column + 1] = `c${count + 1}`;
              }
              /**
               * Coluna lateral direita - Linha superior
               */
              if (row - 1 >= 0 && column + 1 < columns) {
                calculateArea[row - 1][column + 1] = `c${count + 1}`;
              }
              /**
               * Coluna lateral direita - Linha inferior
               */
              if (row + 1 < lines && column + 1 < columns) {
                calculateArea[row + 1][column + 1] = `c${count + 1}`;
              }
              // Coluna lateral
              if (column - 1 >= 0) {
                calculateArea[row][column - 1] = `c${count + 1}`;
              }
              // Coluna lateral - linha superior
              if (row - 1 >= 0 && column - 1 >= 0) {
                calculateArea[row - 1][column - 1] = `c${count + 1}`;
              }
              // Coluna lateral - linha inferior
              if (row + 1 < lines && column - 1 >= 0) {
                calculateArea[row + 1][column - 1] = `c${count + 1}`;
              }
              // Coluna de baixo
              if (row + 1 < lines) {
                calculateArea[row + 1][column] = `c${count + 1}`;
              }
              // Coluna de cima
              if (row - 1 >= 0) {
                calculateArea[row - 1][column] = `c${count + 1}`;
              }
            }

            if (row === lines - 1 && column === columns - 1) {
              count += 1;
            }
          }
        }

        aux = [];

        for (let row = 0; row < lines; row += 1) {
          for (let col = 0; col < columns; col += 1) {
            /**
             *  Coleta conteúdo da posicao do array
             */
            aux.push(calculateArea[row][col]);
            /**
             * Valida se existe aeroporto nas mesmas coordenadas
             * das núvens
             */
            if (
              mapArea[row][col] === 'A' &&
              calculateArea[row][col] === `c${count}`
            ) {
              if (!counts.includes(count)) {
                /**
                 * Rotina para validar quantidade máximo
                 * de aeroportos encontrados, impedindo divergencia
                 * na quantidade de dias máxima
                 */
                if (counts.length <= airports) {
                  counts.push(count);
                }
              }
            }
            if (row === lines - 1 && col === columns - 1) {
              /**
               * Condição para só permitir fim do processo quando
               * nao for localizado o aeroporto
               */
              if (!aux.includes('A')) {
                allAirPorts = true;
              }
            }
          }
        }
      }
      console.log('Localizados', counts);
      /**
       * Pegando posição máxima
       */
      const max = Math.max.apply(null, counts);
      /**
       * Pegando posição minima
       */
      const min = Math.min.apply(null, counts);

      return { min, max };
    } catch (err) {
      console.log(err);
      throw new AppError(
        `Erro ao calcular nuvem em todos os aeroportos: ${err}`,
      );
    }
  }
}

export default AirportsService;
