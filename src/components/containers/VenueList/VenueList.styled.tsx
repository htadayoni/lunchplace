import styled, { css } from 'styled-components';
export const StyledVenueList = styled.div`
  ${() => {
  return css`
      display: flex;
      flex-direction: row;

      .venue__container--area{
        flex: 0 0 20%;
        box-sizing: border-box;
      }
    `
  }}
`;

export const StyledParticipantsTitle = styled.div`
  ${() => {
  return css`
      color: #aaa;
      flex-grow: 2;
      border-bottom: 1px solid #e6e6e6;
      padding: 20px;
      align-self: flex-end;
      flex: 0 0 40%;
      box-sizing: border-box;
    `
  }}
`;
