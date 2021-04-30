import styled from 'styled-components';
import theme from '../../constants/theme';

export const DataRegister = styled.div`
  background: ${theme.faintGray};
  height: calc(100vh - 90px);
  padding: 20px;
`;
export const CostumerRegistration = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 10px auto 0;
  padding: 16px;

  .form {
    padding-bottom: 30px;
    margin-top: 20px;
    background-color: ${theme.white};
    padding: 16px;
    border-radius: 16px;

    .inputForm {
      margin: 12px 0;
      padding: 8px;
      border-radius: 8px;
      border: 2px solid ${theme.lightGray};
      font-size: 14px;
      font-weight: bold;
      width: 100%;
    }
  }
`;
