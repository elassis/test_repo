
const reverseString = require('./reverseString.js');

  test('check reverse string', () =>{
    expect(reverseString('hola')).toMatch('aloh');
  })