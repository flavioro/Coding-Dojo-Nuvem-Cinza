import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainCard = styled.div`
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  color: black;
  margin-bottom: 30px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  color: #666;
  span {
    font-weight: 400;
    margin-top: 10px;
    strong {
      font-weight: 700;
      color: #000;
    }
  }
`;

export const Button = styled.div`
  width: 100%;

  .button {
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    a {
      margin: 0 40px;
      padding: 10px;
      border: 0;
      background: gray;
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
      transition: background-color 0.2s;
      text-decoration: none;
      &:hover {
        background: ${shade(0.2, '#666666')};
      }
    }
    img {
      margin: 0 20px;
    }
  }
`;
