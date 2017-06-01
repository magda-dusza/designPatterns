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