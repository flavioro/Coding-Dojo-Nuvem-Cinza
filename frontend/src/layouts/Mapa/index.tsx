import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, MainCard, Info, Button } from './styles';
import api from '../../services/api';
import Card from '../../components/Card';

interface Dias {
  min: number;
  max: number;
}

interface Data {
  lines: number;
  columns: number;
  airports: number;
  clouds: number;
}
const Mapa: React.FC = () => {
  const [dias, setDias] = useState({} as Dias);
  const [dataMap, setDataMap] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('@cbyk-nuvem-cinzas');

    let body: Data = {
      lines: 0,
      columns: 0,
      airports: 0,
      clouds: 0,
    };

    if (localData) {
      body = JSON.parse(localData);
    }

    api
      .post('calculate', {
        lines: Number(body.lines),
        columns: Number(body.columns),
        airports: Number(body.airports),
        clouds: Number(body.clouds),
      })
      .then(response => {
        setDias(response.data);
        setDataMap(response.data.drawMap);
      });
  }, []);

  return (
    <Container>
      <Info>
        <span>
          {`Em ${dias.min} dias o primeiro aeroporto estará encoberto.`}
        </span>
        <span>
          {`Em ${dias.max} dias todos os aeroportos estarão encobertos.`}
        </span>
      </Info>
      <MainCard>
        {dataMap.map(data => {
          return <Card key={Math.random()} data={data} />;
        })}
      </MainCard>
      <Button>
        <div className="button">
          <Link to="/">Novo mapa</Link>
        </div>
      </Button>
    </Container>
  );
};

export default Mapa;
