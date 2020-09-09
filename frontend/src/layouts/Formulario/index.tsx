import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

const Form: React.FC = () => {
  const [lines, setLines] = useState('');
  const [columns, setColumns] = useState('');
  const [airports, setAirports] = useState('');
  const [clouds, setClouds] = useState('');

  const history = useHistory();

  const hangleLineChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const cLines = event.target.value;
    setLines(cLines);
  };

  const handleColumnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const cColumns = event.target.value;
    setColumns(cColumns);
  };

  const handleAirportChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const cAirports = event.target.value;
    setAirports(cAirports);
  };

  const handleCloudChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const cClouds = event.target.value;
    setClouds(cClouds);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      history.push('/mapa');

      const data = {
        lines,
        columns,
        airports,
        clouds,
      };

      localStorage.setItem('@cbyk-nuvem-cinzas', JSON.stringify(data));
    } catch (error) {
      console.error('Error ao gerar mapa: ', error);
    }
  };

  return (
    <Container>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <NumberFormat
            value={lines}
            onChange={hangleLineChange}
            placeholder="Linhas do Mapa"
          />
          <NumberFormat
            value={columns}
            onChange={handleColumnChange}
            placeholder="Colunas do Mapa"
          />
          <NumberFormat
            value={airports}
            onChange={handleAirportChange}
            placeholder="Aeroportos"
          />

          <NumberFormat
            onChange={handleCloudChange}
            value={clouds}
            placeholder="Nuvens"
          />

          <button type="submit">Gerar Mapa</button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
