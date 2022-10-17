const mongoose = require("mongoose");

const TutorialSchema = mongoose.Schema({
    title:String,
    description: String,
    published: Boolean,
});

const TutorialModel = mongoose.model("Tutorial",TutorialSchema);

module.exports=TutorialModel;