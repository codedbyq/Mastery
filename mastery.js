const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require('passport');
// import configureStore from './frontend/src/store/store';
// import { receiveSkill, receiveSkills, receiveUserSkills, receiveNewSkill, removeSkill } from "./frontend/src/actions/skill_actions"
// import Root from './frontend/src/components/root'

const users = require("./routes/api/users");
const skills = require("./routes/api/skills");

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("WooHoo! Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hi World"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/skills", skills);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// document.addEventListener("DOMContentLoaded", () => {
//   const store = configureStore();
//   //purely for testing purposes; will delete
//   window.store = store;
//   window.receiveSkill = receiveSkill;
//   window.receiveSkills = receiveSkills;
//   window.receiveUserSkills = receiveUserSkills;
//   window.receiveNewSkill = receiveNewSkill;
//   window.removeSkill = removeSkill;

//   const root = document.getElementById("content");
//   ReactDOM.render(<Root store={store} />, root);
// });