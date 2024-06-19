import { createRef, useRef, useState } from "react";
import Note from "./components/Note";
import NewBtn from "./components/NewBtn";
import { noteThemes } from "./components/constants";
import OutsideAlerter from "./useOutsideAlerter";
function App() {
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  !savedNotes.length ? (savedNotes = [{ id: 1, content: "", position: { x: "50%", y: "50%" } }]) : savedNotes;

  const [notes, setNotes] = useState(savedNotes);
  const noteRefs = useRef([]);

  const handleDragStart = (noteId, e) => {
    const noteRef = noteRefs.current[noteId].current;
    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const oldOutlineStyle = noteRef.style.outline;

    noteRef.style.outline = "2px solid white";
    noteRef.style.zIndex = "999";

    const handleMouseMove = (e) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };
      noteRef.style.outline = oldOutlineStyle;
      noteRef.style.zIndex = "auto";
      updateNotePosition(noteId, newPosition);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const createNewNote = () => {
    const newNote = {
      id: notes.length ? notes[notes.length - 1].id + 1 : 1,
      content: "",
      position: {
        x: "50vw",
        y: "50vh",
      },
      theme: noteThemes[Math.floor(Math.random() * noteThemes.length + 1)],
      rotation: Math.floor(Math.random() * 10) - 5,
    };
    // console.log(newNote);
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  const updateNotePosition = (id, newPosition) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, position: newPosition, rotation: Math.floor(Math.random() * 10) - 5 } : note
    );
    console.log(updatedNotes);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    // console.log(updatedNotes);
  };
  const updateNoteContent = (id, newContent) => {
    const updatedNotes = notes.map((note) => (note.id === id ? { ...note, content: newContent } : note));
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    // console.log(updatedNotes);
  };
  const updateNoteTheme = (id, updatedTheme = {}) => {
    const updatedNotes = notes.map((note) => (note.id === id ? { ...note, theme: updatedTheme } : note));
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    // console.log(updatedNotes);
  };
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    delete noteRefs.current[id];
  };

  return (
    <>
      <NewBtn onClickHandler={createNewNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            ref={
              noteRefs.current[note.id]
                ? noteRefs.current[note.id]
                : (noteRefs.current[note.id] = createRef(note.id))
            }
            initialPos={note.position}
            onMouseDown={(e) => handleDragStart(note.id, e)}
            rotation={note.rotation}
            content={note.content}
            contentChangeHandler={(newContent) => {
              updateNoteContent(note.id, newContent);
            }}
            deleteNoteHandler={() => deleteNote(note.id)}
            theme={note.theme ? note.theme : noteThemes[0]}
            themeChangeHandler={(updatedTheme) => {
              updateNoteTheme(note.id, updatedTheme);
            }}
          />
        );
      })}
    </>
  );
}

export default App;
