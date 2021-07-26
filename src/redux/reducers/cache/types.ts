export const ADD_CACHED_VENUE = 'ADD_CACHED_VENUE';

export interface CacheVenueState {
  list: CachedVenue[] | [];
}

export interface CachedVenue {
  id: string;
  name: string;
  rating: number;
}

export interface SetCachedValues {
  type: typeof ADD_CACHED_VENUE;
  payload: CachedVenue;
}