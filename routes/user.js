var user = require('express').Router();

user.get('/:id', function (req, res) {
    res.send('The user id is ' + req.params.id);
});

module.exports = user;