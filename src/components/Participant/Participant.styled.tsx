import styled, { css } from 'styled-components';
export const StyledParticipant = styled.div`
  ${() => {
  return css`
      display: flex;
      flex-direction: row;
    `
  }}
`;

export const ParticipantCol = styled.div`
  ${() => {
  return css`
      flex: 0 0 20%;
      border-bottom: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
      box-sizing: border-box;


      &.participant__name{
        flex: 0 0 40%;
        padding: 10px;
        
        input{
          width: 100%;
          box-sizing: border-box;
        }
      }

      &.participant__rate{
        text-align: center;
        cursor: pointer;
        transition: 0.1s ease-in-out;
        justify-content: center;
        display: flex;

        &:hover{
          background: #f2f4e1;
        }
      }

      &.participant__rate.active {
        background: #b7c747;
      }

    `
  }}
`;
