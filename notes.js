const fs = require("fs");

const fetchNotes = () => {
  try {
    let noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title: title,
    body: body
  };

  let duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  } 
};

const getAll = () => {
  console.log("Fetching all notes");
};

const removeNote = title => {
  console.log(`Removing note: ${title}`);
};

const readNote = title => {
  console.log(`Reading note: ${title}`);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
};
