var admin = require('express').Router();

// helper functions
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

// routes
admin.get('/', isLoggedIn, function (req, res) {
    res.render('admin', {});
});

module.exports = admin;