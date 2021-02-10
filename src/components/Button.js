import styled from 'styled-components';
import { rgba } from 'polished';

const Button = styled.button`
  outline: none;
  background: ${({theme})=> theme.colors.red};
  padding: ${({theme})=> `${theme.spacing[2]}px ${theme.spacing[3]}px`};
  // height: 100%;
  border: ${({theme}) => `2px solid ${theme.colors.white}`};
  color: ${({theme}) => theme.colors.white};
  font-weight: 800;
  letter-spacing: .5px;
  border-radius: 4px;
  transition: background .2s ease-in-out;
  &:hover {
    cursor: pointer;
    background: ${({theme}) => rgba(theme.colors.red, .9)};
  }
`;

export default Button;