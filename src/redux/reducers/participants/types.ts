export const SET_PARTICIPANTS = 'SET_PARTICIPANTS';
export const ADD_PARTICIPANTS = 'ADD_PARTICIPANTS';
export const UPDATE_PARTICIPANTS = 'UPDATE_PARTICIPANTS';

export interface ParticipantsState {
  list: Participant[] | [];
}

export interface Participant {
  id: string;
  name: string;
  rate: string;
}

export interface SetParticipants {
  type: typeof SET_PARTICIPANTS;
  payload: Participant[] | [];
}

export interface UpdateParticipants {
  type: typeof UPDATE_PARTICIPANTS;
  payload: Participant;
}

export interface AddParticipants {
  type: typeof ADD_PARTICIPANTS;
}