const fs = require('fs/promises');

async function addNote (title) {

    const notes = require('./db.json');

    const note = {
        title: title,
        id: Date.now().toString()
    }

    notes.push(note);

    await fs.writeFile('./db.json', JSON.stringify(notes));

    // notes.push(note);
}

function getNotesList () {
    return require('./db.json');
}

module.exports = {addNote, getNotesList};