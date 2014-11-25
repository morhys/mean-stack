var Project = require('../models/projects');

module.exports.create = function (req, res) {
  var project = new Project(req.body);
  project.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Project.find({}, function (err, results) {
    res.json(results);
  });
}