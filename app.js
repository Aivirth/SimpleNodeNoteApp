const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

//fetch yargs parsed argvs
const argv = yargs.argv;

//fetch process from yargs _ property
const command = argv._[0];
console.log(`Process: ${process.argv}`);
console.log(`yargs: ` , argv);


switch(true){
    case (command === 'add'):
    notes.addNote(argv.title, argv.body);
    break;

    case (command === 'list'):
    notes.getAll();
    break;

    case (command === 'remove'):
    notes.removeNote(argv.title);
    break;

    case (command === 'read'):
    notes.readNote(argv.title);
    break;

    default:
    console.log('command not recognized');
}