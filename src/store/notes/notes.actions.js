import {
  ADD_NOTE,
  GET_NOTES,
  GET_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE
} from "./notes.types";

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  };
};

export const getNotes = () => {
  return {
    type: GET_NOTES
  };
};

export const getNote = (note_id) => {
  return {
    type: GET_NOTE,
    payload: note_id
  };
};

export const updateNote = (note) => {
  return {
    type: UPDATE_NOTE,
    payload: note
  };
};

export const deleteNote = (note_id) => {
  return {
    type: DELETE_NOTE,
    payload: note_id
  };
};
