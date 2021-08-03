const stringCount = require('./stringCount.js');

test('get the correct count', () =>{
    expect(stringCount('hola')).toBe(true);
})