import {
  SET_PARTICIPANTS,
  ADD_PARTICIPANTS,
  UPDATE_PARTICIPANTS,
  SetParticipants,
  AddParticipants,
  ParticipantsState,
  UpdateParticipants,
  Participant
} from "./types";

const initialState: ParticipantsState = {
  list: [{
    id: "0",
    name: "",
    rate: ""
  }]
};

export const participants = (state = initialState, action: SetParticipants | AddParticipants | UpdateParticipants): ParticipantsState => {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return {
        ...state,
        list: action.payload
      };
    case UPDATE_PARTICIPANTS:
      const temp = [...state.list];
      const idx: number = temp.findIndex((item: Participant) => item.id === action.payload.id)
      
      if(idx < 0) 
        return state

      temp[idx] = action.payload;
      return {
        ...state,
        list: temp
      };
    case ADD_PARTICIPANTS:
      return {
        ...state,
        list: [...state.list, {
          id: state.list.length.toString(),
          name: "",
          rate: ""
        }]
      };
    default :
      return state
  }

};
