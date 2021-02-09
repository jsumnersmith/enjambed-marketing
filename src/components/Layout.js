import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset' 
import theme from '../theme';

const Wrapper = styled.div`
  margin: 0;
`;

export default ({children}) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Wrapper>
      {children}
    </Wrapper>
  </ThemeProvider>
);