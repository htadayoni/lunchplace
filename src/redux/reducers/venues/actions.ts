import {
  SET_VENUES,
  UPDATE_VENUES,
  SetVenues,
  UpdateVenues,
  Venue
} from './types';

export const setVenues = (payload: Venue[]): SetVenues => ({
  type: SET_VENUES,
  payload
});

export const updateVenues = (payload: Venue): UpdateVenues => ({
  type: UPDATE_VENUES,
  payload
});