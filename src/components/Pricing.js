import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { rgba } from 'polished';

const Header = () => (
  <Wrapper>
    <Inner>
      <Label>Pricing</Label>
      <CardWrapper>
        <PriceCard>
          <PriceTitle>Starter</PriceTitle>
          <ul>
            <li>1,000 API Hits/mo</li>
            <li>3 Project Spaces</li>
            <li>1 User</li>
          </ul>
          <Button style={{display: 'block', width: "100%"}}>Get Started</Button>
        </PriceCard>
        <PriceCard>
          <PriceTitle>Pro</PriceTitle>
          <ul>
            <li>1000,000 API Hits/mo</li>
            <li>100 Project Spaces</li>
            <li>10 User</li>
          </ul>
          <Button style={{display: 'block', width: "100%"}}>Get Started</Button>
        </PriceCard>
        <PriceCard>
          <PriceTitle>Enterprise</PriceTitle>
          <ul>
            <li>1,000,000 API Hits/mo</li>
            <li>Unlimited Project Spaces</li>
            <li>Unlimited Users</li>
          </ul>
          <Button style={{display: 'block', width: "100%"}}>Get Started</Button>
        </PriceCard>
      </CardWrapper>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.lightBlue};
  width: 100%;
  min-height: 300px;
`;

const Inner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  width: 1140px;
  height: 100%;
  padding-top: ${({theme}) => theme.spacing[6]}px;
  padding-bottom: ${({theme}) => theme.spacing[6]}px;
`;

const Label = styled.h3`
  color: white;
  font-family: ${({theme})=>theme.fonts.sans};
  font-size: 20px;
  font-weight: 800;
  margin-bottom: ${({theme})=> theme.spacing[3]}px;
`;

const PriceCard = styled.div`
  background: ${({theme}) => theme.colors.white};
  border-radius: 10px;
  width: 27%;
  padding: ${({theme}) => theme.spacing[4]}px;
  box-shadow: ${({theme}) => `0px 8px 16px ${rgba(theme.colors.blue, .6)}`};
  & + & { margin-left: 6%; }
  ul  { 
    margin-bottom: ${({theme}) => theme.spacing[3]}px; 
    font-family: ${({theme}) => theme.fonts.sans};
  }
  li + li { margin-top: ${({theme}) => theme.spacing[2]}px; }
`;

const PriceTitle = styled.h4`
  color: ${({theme}) => theme.colors.blue};
  font-size: 28px;
  font-weight: 800;
  font-family: ${({theme}) => theme.fonts.sans};
  padding-bottom: ${({theme}) => theme.spacing[2]}px;
  margin-bottom: ${({theme}) => theme.spacing[3]}px;
  border-bottom: solid 5px ${({theme}) => theme.colors.lightBlue};
`

const CardWrapper = styled.div`
  display: flex;
`;

export default Header;