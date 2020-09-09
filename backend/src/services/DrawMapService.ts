import RandomNumber from '../helpers/RandomNumber';
import AppError from '../errors/AppError';

interface Request {
  lines: number;
  columns: number;
  airports: number;
  clouds: number;
}

class DrawMapService {
  public execute({ lines, columns, airports, clouds }: Request): string[][] {
    try {
      const Airport = 'A';
      const Cloud = 'c0';

      const area: string[][] = [];

      let count = 1;
      /**
       * Montando area
       */
      for (let row = 0; row < lines; row += 1) {
        area[row] = [];
        for (let column = 0; column < columns; column += 1) {
          area[row][column] = String(count);
          count += 1;
        }
      }

      /**
       * Gerando range de posições de 1 a N
       */
      const positions = Array.from(
        { length: lines * columns },
        (v, k) => k + 1,
      );

      /**
       * Coletando posições dos aeroportos e nuvens
       */
      const airportPosition = RandomNumber(positions, airports);
      const cloudPosition = RandomNumber(positions, clouds);

      /**
       * Insere posição dos aeroportos
       */
      for (let row = 0; row < lines; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          airportPosition.forEach(air => {
            if (area[row][column] === String(air)) {
              area[row][column] = Airport;
            }
          });
        }
      }

      /**
       * Insere posição das nuvens
       */
      for (let row = 0; row < lines; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          cloudPosition.forEach(cloud => {
            if (area[row][column] === String(cloud)) {
              area[row][column] = Cloud;
            }
          });
        }
      }
      return area;
    } catch (err) {
      console.log(err);
      throw new AppError(`Erro na geracao do mapa: ${err}`);
    }
  }
}

export default DrawMapService;
