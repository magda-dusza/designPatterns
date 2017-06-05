var repo = function () {
    return {
        get: function (id) {
            console.log('Getting project ', id);
            return {
                name : 'new project from db'
            };
        },
        save : function (project) {
            console.log('Saving project', project.name, 'to the database');
        }
    };
};

module.exports = repo();