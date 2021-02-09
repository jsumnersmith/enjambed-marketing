import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.lightBlue};
  width: 100%;
  min-height: 300px;
`

const Header = () => (
  <Wrapper>
    This is pricing
  </Wrapper>
);

export default Header;