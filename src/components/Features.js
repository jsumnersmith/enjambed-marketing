import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';


const Header = () => (
  <Wrapper>
    <Inner>
      <FeatureWrapper>
        <StaticImage 
          src="../images/hand.svg"
          layout="constrained"
          width={400}
          height={200}
        />
        <h3>Feature 1</h3>
      </FeatureWrapper>
      <FeatureWrapper>
        <StaticImage 
          src="../images/world.svg"
          layout="constrained"
          width={400}
          height={200}
        />
        <h3>Feature 2</h3>
      </FeatureWrapper>
      <FeatureWrapper>
        <StaticImage 
          src="../images/code.svg"
          layout="constrained"
          width={400}
          height={200}
        />
        <h3>Feature 3</h3>
      </FeatureWrapper>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.white};
  width: 100%;
  min-height: 300px;
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

const FeatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
  height: 100px;
  color: blue;
`

export default Header;