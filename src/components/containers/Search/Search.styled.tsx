import styled, { css } from 'styled-components';
export const StyledSearch = styled.form`
  ${() => {
  return css`
    margin-bottom: 20px;

    .search__input{
      margin-right: 20px;
      width: 300px;
    }
  `
  }}
`;
