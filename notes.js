const fs = require('fs');

const addNote = (title, body)=>{
    let notes = [];
    const note = {
        title : title,
        body : body
    };

    try {
        let noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (error) {
        console.log(error)
    }

    let duplicateNotes = notes.filter(note => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }else{
        console.log(`Note with title "${title}" already present`);
    }
    
    
}

const getAll = () =>{
    console.log('Fetching all notes');
}

const removeNote = (title) => {
    console.log(`Removing note: ${title}`)
}

const readNote = (title)=>{
    console.log(`Reading note: ${title}`)
}


module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote
}