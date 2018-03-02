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
      console.log("---");
      console.log(`Title: ${noteAdded.title}`);
      console.log(`Body: ${noteAdded.body}`);
    } else {
      console.log("Duplicate found");
    }
    break;

  case command === "list":
    notes.getAll();
    break;

  case command === "remove":
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? "Note removed" : "Note not removed";
    console.log(message);
    break;

  case command === "read":
    const noteSelected = notes.readNote(argv.title);
    break;

  default:
    console.log("command not recognized");
}
