const yargs = require('yargs');
const pkg = require('./package.json');
const {addNote, getNotesList} = require('./notes.controller');

const version = pkg.version;
const author = pkg.author;

yargs.command({
    command: 'add',
    describe: "add note",
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true,
        }
    },
    handler ({title}) {
        addNote(title);
    }
})

yargs.command({
    command: 'list',
    describe: "Show note list",
    handler () {
        const notes = getNotesList();
        console.log(notes)
    }
});

yargs.parse();