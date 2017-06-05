var Repo = require('./projectRepository');

var Project = function (data) {
    this.name = data.name;
};

Project.prototype.save = function () {
    Repo.save(this);
};

module.exports = Project;