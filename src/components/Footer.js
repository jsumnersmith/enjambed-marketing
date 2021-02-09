import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.blue};
  width: 100%;
  min-height: 50vh;
`

const Header = () => (
  <Wrapper>
    This is a footer
  </Wrapper>
);

export default Header;