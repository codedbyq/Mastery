const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
    dropDups: true,
  },
  followerId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
    dropDups: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

FollowSchema.index({ 'userId': , 'followerId': 1}, {unique: true});

module.exports = Follow = mongoose.model("Follow", FollowSchema);