const express = require('express');
const router = express.Router();
const passport = require("passport");

const Follow = require('../../models/Follow');
const User = require('../../models/User')

//api/follows/user/:userId - find all users follows
router.get('/user/:user_id', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Follow.find({userId: req.params.user_id })
        .then((follows) => res.json(follows))
})

//api/follows/ - gets all follows (testing purposes)
router.get('/', (req, res) => {
    Follow.find()
        .then((follows) => res.json(follows))
})


//api/follows/ - a user can follow another user Id
router.post('/', passport.authenticate('jwt', { session: false }),
    (req, res) => {  
        const user = User.findById(req.user.id);
        const follow = User.findById(req.body.followerId);
        if (user && follow) {
            const newFollow = new Follow({
              userId: req.user.id,
              followerId: req.body.followerId,
            });
            
            newFollow.save()
                .then(() => res.json('Followed Successfully'))
            .catch(err => res.status(400).json('Error: ' + err));
        } else {
            return res.status(400).json('Error: user not found');
        }
    }
);

//api/follows/:id - delete a following
router.delete(
  "/:id", passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Follow.findByIdAndDelete(req.params.id)
      .then(() => res.json("Unfollowed User"))
      .catch((err) => res.json("Error: " + err));
  }
);

module.exports = router;