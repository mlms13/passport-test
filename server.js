var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    router = express.Router();

router.get('/', function (req, res) {
    res.send('This is the home page.');
});

app.use('/', router);
app.use('/user', require('./routes/user.js'));

app.listen(port, function () {
    console.log('Started listening on port', port);
});