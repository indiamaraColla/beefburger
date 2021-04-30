import styled from 'styled-components';
import theme from '../../constants/theme';

export const Container = styled.div`
  background: ${theme.darkBlue};
  width: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 820px;
  margin: 0 auto;
`;
