import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import adirondack from '../images/adirondack.png';
import oxbridge from '../images/oxbridge.png';
import poetics from '../images/poetics.png';
import western from '../images/western.png';

const Header = () => (
  <Wrapper>
    <Mark><StaticImage src="../images/mark.svg"/></Mark>
    <Inner>
      <Label>Used by</Label>
      <img src={oxbridge} alt="Oxbridge University" style={{height: 90}}/>
      <img src={adirondack} alt="The Adirondack Review" style={{height: 25}} />
      <img src={western} alt="Western University Department of Computational Poesy" style={{height: 90}}/>
      <img src={poetics} alt="New Poetics Project"/>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.skyBlue};
  width: 100%;
`;

const Inner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  width: 1140px;
  height: 100%;
  padding-top: ${({theme}) => theme.spacing[5]}px;
  padding-bottom: ${({theme}) => theme.spacing[5]}px;
  display: flex;
  align-items: center;
  img { 
    height: 75px;
    width: auto;
    margin-left: 50px;
  }
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
  font-weight: 800;
  flex-grow: 
`;

export default Header;