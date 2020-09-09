import React from 'react';

import { Container, Area } from './styles';
import AirplaneImage from '../../assets/airplane.png';
import CloudImage from '../../assets/cloud.png';
import GroundImage from '../../assets/grounds.png';

interface CardProps {
  data: string[];
}

const Card: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <Container>
      {data.map(d => {
        return (
          <Area key={Math.random()} type={d} className="Area">
            {d === 'A' && <img src={AirplaneImage} alt="Airplane" title={d} />}
            {d === 'c0' && <img src={CloudImage} alt="Cloud" title={d} />}
            {d !== 'A' && d !== 'c0' && (
              <img src={GroundImage} alt="Ground" title={d} />
            )}
          </Area>
        );
      })}
    </Container>
  );
};

export default Card;
