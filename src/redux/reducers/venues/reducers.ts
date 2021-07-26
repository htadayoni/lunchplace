import {
  SET_VENUES,
  UPDATE_VENUES,
  SetVenues,
  VenuesState,
  UpdateVenues,
  Venue
} from "./types";

const initialState: VenuesState = {
  list: []
};

export const venues = (state = initialState, action: SetVenues | UpdateVenues): VenuesState => {
  switch (action.type) {
    case SET_VENUES:
      return {
        ...state,
        list: action.payload
      };
    case UPDATE_VENUES:
      const temp = [...state.list];
      const idx: number = temp.findIndex((item: Venue) => item.id === action.payload.id)
      
      if(idx < 0) 
        return state

      temp[idx] = action.payload;
      return {
        ...state,
        list: temp
      };
    default :
      return state
  }

};
