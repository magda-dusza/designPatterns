var repo = function () {
    return {
        get: function (id) {
            console.log('Getting task ', id);
            return {
                name : 'new task from db'
            };
        },
        save : function (task) {
            console.log('Saving task:', task.name, 'to the database');
        }
    };
};

module.exports = repo();