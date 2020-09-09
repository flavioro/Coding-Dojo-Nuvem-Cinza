import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface MapaProps {
  type: string;
}

export const Container = styled.div`
  /* background: black; */

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Area = styled.span<MapaProps>`
  width: 70px;
  height: 70px;
  padding: 20px;
  margin: 5px;

  background: #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    ${props =>
      props.type !== 'A' &&
      props.type !== 'c0' &&
      css`
        width: 70px;
        height: 70px;
      `}
  }

  ${props =>
    props.type === 'c0' &&
    css`
      background: #87ceeb;
      &:hover {
        background: ${shade(0.2, '#87ceee')};
      }
    `}
  ${props =>
    props.type === 'A' &&
    css`
      background: #ffa500;
      &:hover {
        background: ${shade(0.2, '#ffa400')};
      }
    `}
`;
