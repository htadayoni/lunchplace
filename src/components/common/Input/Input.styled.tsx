import styled, { css } from 'styled-components';
import InputProps from './Input.props';
export const StyledInput = styled.input<InputProps>`
  ${({inputSize}) => {
  return css`
    border: 1px solid #ccc;
    border-radius: 3px;
    height: ${inputSize !== 'S' ? '40px' : '30px'};
    padding: 0 15px;
    outline: none;
    transition: 0.2s ease-in-out;

    &:focus {
      box-shadow: 0px 0px 4px #ccc;
    }
  `
  }}
`;
