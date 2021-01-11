import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
    
  function SearchText(val){
    setNotes(preNotes => { 
        var allNotes = preNotes
        var filterNotes = preNotes.filter((note) => {
              return note.content.includes(val);
          });
      });
  }

  return (
    <div>
      <Header Search = {SearchText}/>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
