import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <Wrapper>
    <Inner>
      <SectionTitle>Features</SectionTitle>
      <Row>
        <FeatureWrapper>
          <FeatureImage>
            <StaticImage 
              src="../images/hand.svg"
              loading="eager"
              layout="fixed"
              width={250}
              height={175}
              objectFit="contain"
              placeholder="blurred"
            />
          </FeatureImage>
          <FeatureTitle>Aesthetics First</FeatureTitle>
          <p>All lines breaks are AI optmized for aesthetic impact, ensuring that your poetry employs optimal line breaks.</p>
        </FeatureWrapper>
        <FeatureWrapper>
          <FeatureImage>
            <StaticImage 
              src="../images/world.svg"
              layout="fixed"
              loading="eager"
              width={150}
              height={150} 
              objectFit="contain"
              placeholder="blurred"
            />
          </FeatureImage>
          <FeatureTitle>Multilingual Support</FeatureTitle>
          <p>Out of the box, Enjamed supports 47 languages including multiple directions for lines and line breaks.</p>
        </FeatureWrapper>
        <FeatureWrapper>
          <FeatureImage>
            <StaticImage 
              src="../images/code.svg"
              layout="fixed"
              loading="eager"
              width={293}
              height={100}
              objectFit="contain"
              placeholder="blurred"
            />
          </FeatureImage>
          <FeatureTitle>PLON Formatted</FeatureTitle>
          <p>Using the new standard for formatting poems, Enjambed returns all text as Poetic Line Object Notation formatted data.</p>
        </FeatureWrapper>
      </Row>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.white};
  width: 100%;
  height: 100%;
`; 

const Inner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  width: 1140px;
  height: 100%;
  padding-top: ${({theme}) => theme.spacing[5]}px;
  padding-bottom: ${({theme}) => theme.spacing[6]}px;
`;

const SectionTitle = styled.h3`
  font-family: ${({theme}) => theme.fonts.sans};
  font-size: 20px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.red};
  margin-bottom: ${({theme}) => theme.spacing[4]}px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`

const FeatureWrapper = styled.div`
  dos[;a]
  justify-content: center;
  width: 27%;
  & > * { width: 100%; }
  & + & { margin-left: 6%;}
  & p { line-height: 1.5; font-family: ${({theme}) => theme.fonts.serif}; font-size: 16px; }
`;

const FeatureImage = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureTitle = styled.h3`
  color: ${({theme})=>theme.colors.black};
  font-size: 30px;
  font-weight: 800;
  font-family: ${({theme})=>theme.fonts.sans};
  margin-bottom: ${({theme})=> theme.spacing[2]}px;
`;

export default Header;