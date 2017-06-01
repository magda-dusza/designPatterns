//template start
var obj = {};

Object.defineProperty(obj, 'name', {
    //
    value: 'my name',
    //can I change the value
    writable : true,
    //can I use it in the loop
    enumerable: true,
    //can I change this configration after creation
    configurable: true
});

//template end

//demo
var task = {
    title: 'My task',
    description: 'description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title+ ' '+ this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log('Task properties', Object.keys(task));
console.log('My task: ', task.toString());