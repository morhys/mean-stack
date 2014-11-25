var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    projectsController = require('./server/controllers/projects-controller');

mongoose.connect('mongodb://localhost:27017/projects');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/projects', projectsController.list);
app.post('/api/projects', projectsController.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})