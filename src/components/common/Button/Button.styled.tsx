import styled, { css } from 'styled-components';
import ButtonProps from './Button.props'
export const StyledButton = styled.button<ButtonProps>`
  ${() => {
  return css`
    background: #544cb4;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    padding: 0 50px;
    color: #fff;
    border: 0;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
      background: #726bc7;
    }
  `
  }}
`;
