//require mongoose 
var mongoose = require('mongoose');

//use the .Schema method from the npm package of mongoose
var Schema = mongoose.Schema;

//creae the note schema
var NoteSchema = new Schema({
    //just body
    body: {
        type: String
    }
});

var Note = mongoose.model("Note", NoteSchema)

//Export the module, make this accessible to other parts of my code
module.exports = Note;