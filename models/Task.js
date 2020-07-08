const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: "skills",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    default: ""
  },
  elapsedTime: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  }
});


module.exports = Task = mongoose.model('Task', TaskSchema);
