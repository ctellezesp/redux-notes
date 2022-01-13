import {
  ADD_NOTE,
  GET_NOTES,
  GET_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE
} from "./notes.types";

const inititalState = {
  notes: []
};

export const notesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case GET_NOTES:
      return {
        ...state,
        notes: state.notes
      };
    case GET_NOTE:
      return {
        ...state,
        selectednote: state.notes.find((note) => note.id === action.payload)
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        )
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload)
      };
    default:
      return state;
  }
};
