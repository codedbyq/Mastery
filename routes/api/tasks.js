const express = require("express");
const router = express.Router();
const passport = require("passport");

const Task = require('../../models/Task');
const validateTaskInput = require('../../validation/tasks');

// get all tasks 
router.get('/', (req, res) => {
  Task.find()
    .sort({ creationDate: -1 })
    .then(tasks => {
      const allTasks = {}  
      // iterate over the tasks and format the response as an object of key-value pairs
      tasks.forEach(task => {allTasks[task.id] = task;})
      return res.send(allTasks)
    })
    .catch(er => res.status(400).json(errors));
});

//get all tasks for a userID 
router.get('/user/:user_id', (req, res) => {
  Task.find({ user: req.params.user_id })
    .sort({ creationDate: -1 })
    .then(tasks => {
      const allTasks = {}
      tasks.forEach(task => { allTasks[task.id] = task; })
      return res.send(allTasks)
    })
    .catch(err => res.status(400).json({ error: err }))
});

// get all tasks attached to a skillID
router.get('/skill/:skill_id', (req, res) => { 
  Task.find({ skill: req.params.skill_id })
    .sort({ creationDate: -1 })
    .then(tasks => {
      const allTasks = {}
      tasks.forEach(task => {allTasks[task.id] = task;})
      return res.send(allTasks)
    })
    .catch(err => res.status(400).json({ error: err }))
});

// get a single task
router.get('/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(404).json({error: 'No task found'}));
});

// create new task - only user can
router.post('/', 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTaskInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    console.log(req.body)
    const newTask = new Task({
      skill: req.body.skill,
      user: req.user.id,
      title: req.body.title,
      details: req.body.details,
      elapsedTime: req.body.elapsedTime,
      createdAt: req.body.createdAt,
    })

    newTask.save().then((task) => res.json(task));
  }
); 

// edit task 
router.patch('/edit/:id', 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTaskInput(req.body);
      if(!isValid) {
        return res.status(400).json(errors);
      }

      Task.findById(req.params.id)
        .then(task => {
          task.title = req.body.title;
          task.details = req.body.details;
          task.elapsedTime = req.body.elapsedTime;
          task.createdAt = req.body.createdAt;

          task.save()
            .then(() => res.json('Task Updated'))
            .catch(err => res.status(400).json({ Error: err }));
        })
    }
);

// delete task - only user can
router.delete('/:id',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Task.findByIdAndDelete(req.params.id)
      .then(() => res.json('Task Deleted'))
      .catch(err => res.status(400).json({ Error: err }));
  }
);


module.exports = router;