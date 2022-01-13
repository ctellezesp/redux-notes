import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import { addNote, deleteNote, updateNote } from "./store/notes/notes.actions";
import { isSomeStringEmpty } from "./utils/string-empty.util";
import "./App.css";

export const App = () => {
  const dispatch = useDispatch();

  const notesStore = useSelector((store) => store.notes);

  const initialNote = {
    title: "",
    description: "",
    id: v4()
  };

  const [note, setNote] = useState(initialNote);
  const [editing, setEditing] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({
      ...note,
      [name]: value
    });
  };

  const dispatchAddNote = () => {
    if(isSomeStringEmpty([note.title, note.description])) {
      window.alert('Title or description is empty');
      return;
    }
    dispatch(addNote(note));
    setNote(initialNote);
  };

  const dispatchEditNote = () => {
    if(isSomeStringEmpty([note.title, note.description])) {
      window.alert('Title or description is empty');
      return;
    }
    dispatch(updateNote(note));
    setNote(initialNote);
    setEditing(false);
  };

  const dispatchDeleteNote = (note_id) => {
    dispatch(deleteNote(note_id));
  };

  const handleSelectNote = (note_id) => {
    setNote(notesStore.notes.find((note) => note.id === note_id));
    setEditing(true);
  };

  return (
    <div>
      <h1>Notes with Redux</h1>
      <div>
        <h3>Add notes</h3>
        <div>
          <input
            className="custom-input"
            name="title"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={note.title || ""}
          />
        </div>
        <div>
          <textarea
            className="custom-input"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={note.description || ""}
          >
            {note.description || ""}
          </textarea>
        </div>
        <div>
          <button
            className="btn"
            onClick={editing ? dispatchEditNote : dispatchAddNote}
          >
            {editing ? "Edit" : "Create"}
          </button>
        </div>
      </div>
      <h3>Your notes</h3>
      <div className="notes">
        {notesStore.notes.length > 0 &&
          notesStore.notes.map((note) => (
            <div key={note.id} className="note">
              <span className="note-title">{note.title}</span>
              <span className="note-description">{note.description}</span>
              <div className="note-icons">
                <span
                  className="material-icons note-icon"
                  onClick={() => handleSelectNote(note.id)}
                >
                  edit
                </span>
                <span
                  className="material-icons note-icon"
                  onClick={() => dispatchDeleteNote(note.id)}
                >
                  delete
                </span>
              </div>
            </div>
          ))}
      </div>
      {notesStore.notes.length <= 0 && <p>No notes</p>}
    </div>
  );
};
