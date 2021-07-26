import styled, { css } from 'styled-components';
export const StyledImage = styled.img`
  ${({ width, height }) => {
  return css`
      width: ${width ? `${width}px !important` : 'auto'};
      height: ${height ? `${height}px !important` : 'auto'};
    `
  }}
`;
