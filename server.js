var express  = require('express'),
    app      = express(),
    port     = process.env.PORT || 3210,
    mongoose = require('mongoose'),
    passport = require('passport'),

    // middleware and express/connect stuff
    flash    = require('connect-flash'),
    logger   = require('morgan'),
    cookie   = require('cookie-parser'),
    body     = require('body-parser'),
    session  = require('express-session'),
    router   = express.Router(),

    // configuration
    config   = require('./config.js');

// set up mongoose and passport
mongoose.connect(config.mongoUrl);

app.use(logger('dev'));
app.use(cookie());
app.use(body());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({ secret: 'thisissupersecret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

router.get('/', function (req, res) {
    res.send('This is the home page.');
});

router.get('/login', function (req, res) {
    res.render()
});

app.use('/', router);
app.use('/admin', require('./routes/admin.js'));

app.listen(port, function () {
    console.log('Started listening on port', port);
});