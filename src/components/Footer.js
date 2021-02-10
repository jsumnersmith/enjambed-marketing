import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';



const Header = () => (
  <Wrapper>
    <Inner>
      <Logo/>
      <FooterText>Regretably, this is not an actual service but instead a work of fiction. This page was created as a demo site for <a href="https://gatsbyjs.com">Gatsby's</a> new Gatsby Hosting product offered on Gatsby Cloud.</FooterText>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.blue};
  width: 100%;
`
const Inner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  width: 1140px;
  height: 100%;
  padding-top: ${({theme}) => theme.spacing[4]}px;
  padding-bottom: ${({theme}) => theme.spacing[4]}px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const FooterText = styled.p`
  color: ${({theme})=> theme.colors.white};
  font-family: ${({theme})=> theme.fonts.sans};
  line-height: 1.6;
  width: 400px;
  font-size: 14px;
  a { color: ${({theme}) => theme.colors.skyBlue}; }
`;

export default Header;