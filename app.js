const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

//fetch yargs parsed argvs
const argv = yargs.argv;

//fetch process from yargs _ property
const command = argv._[0];
console.log(`Process: ${process.argv}`);
console.log(`yargs: `, argv);

switch (true) {
  case command === "add":
    const noteAdded = notes.addNote(argv.title, argv.body);
    if (noteAdded) {
      console.log("Note Created");
      notes.logNotes(noteAdded);
    } else {
      console.log("Duplicate found");
    }
    break;

  case command === "list":
    const allNotes = notes.getAll();
    console.log(`Printing ${notes.length} note(s).`);

    for (note in allNotes) {
      notes.logNotes(allNotes[note]);
    }
    break;

  case command === "remove":
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? "Note removed" : "Note not removed";
    console.log(message);
    break;

  case command === "read":
    const noteSelected = notes.readNote(argv.title);

    if (noteSelected) {
      console.log("Note Selected");
      notes.logNotes(noteSelected);
    } else {
      console.log(`${argv.title} does not exist`);
    }

    break;

  default:
    console.log("command not recognized");
}
