import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';


const Header = () => (
  <Wrapper>
    <Mark><StaticImage src="../images/mark.svg"/></Mark>
    <Inner>
      <Label>Used By</Label>
      <div>These are the logos</div>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.skyBlue};
  width: 100%;
  height: 100px;
`;

const Inner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  width: 1140px;
  height: 100%;
  padding-top: ${({theme}) => theme.spacing[3]};
  padding-bottom: ${({theme}) => theme.spacing[3]};
  display: flex;
  align-items: center;
`;

const Mark = styled.div`
  position: absolute; 
  margin: auto;
  left: 50%;
  top: -25px;
`;

const Label = styled.h4`
  font-family: ${({theme}) => theme.fonts.sans};
  color: ${({theme}) => theme.colors.gray};
  font-size: 20px;
  font-weight: 900;
  flex-grow: 
`;

export default Header;