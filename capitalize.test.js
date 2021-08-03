const capitalize = require('./capitalizeString.js');


test('return capitalize',()=>{
    expect(capitalize('hello')).toBe('Hello');
});