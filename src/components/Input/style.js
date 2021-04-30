import styled from 'styled-components';
import theme from '../../constants/theme';

export const TextField = styled.input`
  margin: 8px 0;
  padding: 8px;
  border-radius: 8px;
  border: 2px solid ${theme.darkRed};
  font-size: 14px;
  font-weight: bold;
  width: 100%;
`;
