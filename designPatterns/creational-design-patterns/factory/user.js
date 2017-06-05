var Repo = require('./userRepository');

var User = function (data) {
    this.name = data.name;
};

User.prototype.save = function () {
    Repo.save(this);
};

module.exports = User;