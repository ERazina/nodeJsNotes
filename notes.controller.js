import { writeFile } from 'fs/promises';

async function addNote (title) {

    const notes = reqire('./db.json');

    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note);

    await writeFile('./db.json', JSON.stringify(note));

    // notes.push(note);
}

function getNotesList () {

}

export default {addNote, getNotesList};