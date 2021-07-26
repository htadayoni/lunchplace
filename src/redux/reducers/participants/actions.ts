import {
  SET_PARTICIPANTS,
  ADD_PARTICIPANTS,
  UPDATE_PARTICIPANTS,
  SetParticipants,
  AddParticipants,
  UpdateParticipants,
  Participant
} from './types';

export const setParticipants = (payload: Participant[]): SetParticipants => ({
  type: SET_PARTICIPANTS,
  payload
});

export const updateParticipants = (payload: Participant): UpdateParticipants => ({
  type: UPDATE_PARTICIPANTS,
  payload
});

export const resetParticipants = (): SetParticipants => ({
  type: SET_PARTICIPANTS,
  payload: [{
    id: "0",
    name: "",
    rate: ""
  }]
});

export const addParticipant = (): AddParticipants => ({
  type: ADD_PARTICIPANTS
});