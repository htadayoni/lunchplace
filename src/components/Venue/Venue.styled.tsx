import styled, { css } from 'styled-components';
import { VenueLinkProps } from './Venue.props';

export const StyledVenue = styled.div`
  ${() => {
  return css`
      display: flex;
      flex-direction: column;
      text-align: center;
      border-bottom: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
      padding: 20px 0;
    `
  }}
`;

export const StyledVenueLink = styled.a<VenueLinkProps>`
  ${() => {
  return css`
      color: #544cb4;
      font-weight: bold;
      font-size: 20px;
    `
  }}
`;

export const StyledVenueCategory = styled.span`
  ${() => {
  return css`
      color: #aaa;
      margin-bottom: 16px;
    `
  }}
`;

export const StyledVenueRate = styled.span`
  ${() => {
  return css`
      color: #000;
      font-weight: bold;
      font-size: 18px;
    `
  }}
`;