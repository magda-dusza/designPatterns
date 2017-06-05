var Task = require('./task');
var User = require('./user');
var Project = require('./project');
var repo = require('./repoFactory');

var task1 = new Task(repo.task.get(1));
var task2 = new Task(repo.task.get(2));

var user = new User(repo.user.get(1));
var project = new Project(repo.project.get(1));

task1.complete();
task2.save();

user.save();
project.save();
