const yargs = require('yargs');
const pkg = require('./package.json');
const {addNote, getNoteList} = require('./notes.controller').default

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
        console.log("Show note list")
    }
});

yargs.parse();