const express = require("express");
const router = express.Router();
const passport = require("passport");

const Task = require('../../models/Task');

const validateTaskInput = require('../../validation/skills');

// get all tasks
router.get('/', (req, res) => {
  Task.find()
    .then(tasks => res.send(tasks))
    .catch(er => res.status(400).json(errors));
  console.log("get request complete!");
});

//get all tasks for a userID
router.get('/user/:user_id', (req, res) => {
  Task.find({ user: req.params.user_id })
    .then(tasks => res.send(tasks))
    .catch(err => res.status(400).json(errors));
  
  console.log("task's get request complete!");
});

// get all tasks attached to a skillID
// router.get('/skill/:skill_id', (req, res) => {

// })


// get a single task
// create new task - only user can
router.post('/', passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTaskInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTask = new Task({
      skill: req.skill.id,
      title: req.body.title,
      details: req.body.details,
      createdAt: req.body.createdAt,
    })

    newTask.save().then((task) => res.json(task));
  }
);

// edit task - only user can
router.patch('/edit/:id', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const {errors, isValid} = validTaskInput(req.body);

    if(!isValid) {
      return res.status(400).json(errors);
    }

    Task.findById(req.params.id)
      .then(task => {
        task.skill = req.skill.id;
        task.title = req.body.title;
        task.details = req.body.details;
        task.createdAt = req.body.createdAt;

        task.save()
          .then(() => res.json('Task Updated'))
          .catch(err => res.status(400).json('Error:' + err));
      })
  }
),

// delete task - only user can



module.exports = router;