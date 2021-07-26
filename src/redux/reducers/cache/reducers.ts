import {
  ADD_CACHED_VENUE,
  SetCachedValues,
  CachedVenue,
  CacheVenueState
} from "./types";

const initialState: CacheVenueState = {
  list: []
};

export const cache = (state = initialState, action: SetCachedValues): CacheVenueState => {
  switch (action.type) {
    case ADD_CACHED_VENUE:
      let temp = [...state.list];
      const idx: number = temp.findIndex((item: CachedVenue) => item.id === action.payload.id)
      
      if(idx < 0) {
        temp.push(action.payload);
      } else {
        temp[idx] = action.payload;
      }

      return {
        ...state,
        list: temp
      };
      
    default :
      return state
  }

};
