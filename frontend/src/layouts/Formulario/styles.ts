import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .form {
    padding: 30px;
    background: #fff;
    border-radius: 6px;
  }

  h2 {
    color: #666666;
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    input {
      margin: 5px 0;

      border-radius: 3px;
      padding: 10px;
      width: 100%;

      border: 1px solid #666;
      color: #333;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    button {
      border: 0;
      margin: 10px 0;
      background: gray;
      border-radius: 3px;
      padding: 10px;
      width: 100%;

      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;
      svg {
        margin-right: 7px;
      }
      &:hover {
        background: ${shade(0.2, '#666666')};
      }
    }
  }
`;
