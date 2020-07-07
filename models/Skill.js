const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = Skill = mongoose.model("Skill", SkillSchema);