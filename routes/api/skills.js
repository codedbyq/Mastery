const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const passport = require("passport");

const Skill = require('../../models/Skill');
const validateSkillInput = require('../../validation/skills');

// get all skills
router.get('/', (req, res) => {
    Skill.find()
        .then(skills => {
            const allSkills = {};
            // iterate over the users and format the response as an object of key-value pairs
            skills.forEach(skill => {
                allSkills[skill.id] = skill;
            });
            return res.send(allSkills);
        })
        .catch(err => res.status(404).json({ noskillsfound: 'No skills found' }));
});

// get all skills attached to a userID
router.get('/user/:user_id', (req, res) => {
    Skill.find({ user: req.params.user_id })
        .then(skills => res.json(skills))
        .catch(err =>
            res.status(404).json({ noskillsfound: 'No skills found for that user' })
        )
})

// get a single skill
router.get('/:id', (req, res) => {
    Skill.findById(req.params.id)
        .then(skill => res.json(skill))
        .catch(err =>
            res.status(404).json({ noskillfound: 'No skill found with that ID' })
        );
});

//create new skill - only user can
router.post('/', passport.authenticate("jwt", {session: false}),
    (req, res) => {
        const { errors, isValid } = validateSkillInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newSkill = new Skill({
            user: req.user.id,
            category: req.body.category,
            title: req.body.title,
            description: req.body.description,
            createdAt: req.body.createdAt,
        })
        newSkill.save().then((skill) => res.json(skill));
    }
);

//edit skill - only user can
router.patch('/edit/:id', passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const {errors, isValid } = validateSkillInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        Skill.findById(req.params.id)
        .then(skill => {
            skill.user = req.user.id;
            skill.category = req.body.category;
            skill.title = req.body.category;
            skill.description = req.body.description;
            skill.createdAt = req.body.createdAt;
            
            skill.save()
            .then(() => res.json('Skill Updated'))
            .catch(err => res.status(400).json('Error:' + err));
        });
    }
);


//delete skill - only user can
router.delete('/:id', passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Skill.findByIdAndDelete(req.params.id)
        .then(() => res.json('Skill Deleted'))
        .catch((err) => res.status(400).json('Error: ' + err));
    }
);

module.exports = router;
