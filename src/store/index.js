import { combineReducers } from "redux";

import { notesReducer } from "./notes/notes.reducer";

export default combineReducers({
  notes: notesReducer
});
