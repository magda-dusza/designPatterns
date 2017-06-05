var repo = function () {
    return {
        get: function (id) {
            console.log('Getting user ', id);
            return {
                name : 'new user from db'
            };
        },
        save : function (user) {
            console.log('Saving user:', user.name, 'to the database');
        }
    };
};

module.exports = repo();