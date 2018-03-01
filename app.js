const fs = require('fs');
const _ = require('lodash');

let command = process.argv[2];
console.log(process.argv);
console.log(`Command: ${command}`);


switch(command){
    case 'add':
    console.log('adding new note');
    break;

    case 'list':
    console.log('listing all notes');
    break;

    case 'remove':
    console.log('removing note');
    break;

    case 'read':
    console.log('reading note');
    break;

    default:
    console.log('command not recognized');
}