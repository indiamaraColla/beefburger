import styled from 'styled-components';

export const CostumerData = styled.div`
  background: #f2f2f2;
  height: calc(100vh - 96px);
  padding: 20px;
`;
export const DataRegister = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px;

  .form {
    padding-bottom: 30px;
    margin-top: 20px;
    background-color: #fff;
    padding: 16px;
    border-radius: 16px;

    .inputForm {
      margin: 12px 0;
      padding: 8px;
      border-radius: 8px;
      border: 2px solid #ccc;
      font-size: 14px;
      font-weight: bold;
      width: 100%;
    }
  }
`;

export const LoginPageRegister = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
