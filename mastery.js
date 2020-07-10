const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const passport = require('passport');
const path = require("path");
const fileUploadRoutes = require("./routes/api/fileUploadRoutes");

const users = require("./routes/api/users");
const skills = require("./routes/api/skills");
const tasks = require("./routes/api/tasks");
const follows = require("./routes/api/follows");
const seed = require("./seeder");


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("WooHoo! Connected to MongoDB"))
  .catch((err) => console.log(err));


app.get("/", (req, res) => res.send("Hi World"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/skills", skills);
app.use("/api/tasks", tasks);
app.use("/api/follows", follows);
app.use("/api/document", fileUploadRoutes);

const port = process.env.PORT || 5000;
//seed mongo database - uncommenting will reset database from seeder.js
seed();
app.listen(port, () => console.log(`Server is running on port ${port}`));

// document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
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