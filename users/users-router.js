const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-mw.js');

router.get('/', restricted, (req, res) => {
    Users.find(req.user.department)
        .then(users => {
            res.json({ users, loggedInUser: req.user.username });
        })
        .catch(err => res.send(err));
});

module.exports = router;