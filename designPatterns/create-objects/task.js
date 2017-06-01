/*jslint devel: true */
//{} / Object.create(Object.prototype); / new Object()
var task = Object.create(Object.prototype);

task.title = 'My task';
task.description = 'description';
task.toString = function () {
    return this.title + ' ' + this.description;
};

console.log(task.toString());