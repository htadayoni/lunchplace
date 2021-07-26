import {
  ADD_CACHED_VENUE,
  SetCachedValues,
  CachedVenue
} from './types';

export const addCachedVenue = (payload: CachedVenue): SetCachedValues => ({
  type: ADD_CACHED_VENUE,
  payload
});