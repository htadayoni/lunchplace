export const SET_VENUES = 'SET_VENUES';
export const UPDATE_VENUES = 'UPDATE_VENUES';

export interface VenuesState {
  list: Venue[] | [];
}

export interface Venue {
  id: string;
  name: string;
  category: Category;
}

interface Category {
  id: string;
  name: string;
}

export interface SetVenues {
  type: typeof SET_VENUES;
  payload: Venue[] | [];
}

export interface UpdateVenues {
  type: typeof UPDATE_VENUES;
  payload: Venue;
}