//Require Mongoose
var mongoose = require('mongoose');

//Setting variable Schema to librabry (mongoose) and method (Schema);
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    //title , date & url needed for mongo Schema
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

// telling mongoose.model, call this "Article", use the schema as 
// define above in the ArticleSchema block of code above
var Article = mongoose.model("Article", ArticleSchema);

//Export the module (making this accessible to other parts of my code)
module.exports = Article;