import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';

const Header = () => (
  <Wrapper> 
    <Inner>
      <Row>
        <Logo />
        <Button style={{height: "100%"}}>Get Started</Button>
      </Row>
      <Row>
        <div>
          <SmallTitle>
            Introducing Enjambed 1.0
          </SmallTitle>
          <TagLine>An API for building line breaks into text.</TagLine>
        </div>
        <BarWrapper>
          <Bar color="gray" width={75} />
          <Bar color="red" width={78} />
          <Bar color="grayBlue" width={72} />
        </BarWrapper>
        <BarWrapperBG>
          <Bar color="grayBlue" width={75} />
          <Bar color="grayBlue" width={78} />
          <Bar color="red" width={72} />
          <Bar color="grayBlue" width={82} />
          <Bar color="red" width={72} />
          <Bar color="grayBlue" width={64} />
          <Bar color="red" width={72} />
          <Bar color="grayBlue" width={76} />

        </BarWrapperBG>
      </Row>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.blue};
  width: 100%;
  min-height: 580px;
  overflow: hidden;
`;

const Inner = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  width: 1140px;
  padding: ${({theme}) => theme.spacing[4]}px;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  & + & { margin-top: ${({theme}) => theme.spacing[5]}px;}
`;

const SmallTitle = styled.h4`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.serif};
  font-size: 20px;
  max-width: 850px;
  font-style: italic;
  margin-bottom: ${({theme}) => theme.spacing[3]}px;
`;

const TagLine = styled.h3`
  color: ${({theme}) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.sans};
  font-weight: 800;
  font-size: 96px;
  max-width: 70%;
  position: relative;
  z-index: 1;
`;

const BarWrapper = styled.div`
  padding-top: ${({theme}) => theme.spacing[5]}px;
  display: block;
  position: absolute;
  right: -125%;
  width: 200%;
  & > * { float: right; }
`;

const BarWrapperBG = styled.div`
  padding-top: 32px;
  opacity: .3;
  display: block;
  position: absolute;
  z-index: 0;
  left: -108%;
  width: 200%;
  & > * { float: left; }
`;


const Bar = styled.div`
  height: 20px;
  background: ${({color, theme}) => theme.colors[color]};
  width: ${({width}) => width}%;
  & + & { margin-top: 27px }
`;

export default Header;