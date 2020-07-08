const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        // required: true,
    },
    followerId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        // required: true,
    }
})

module.exports = Follow = mongoose.model("Follow", FollowSchema);