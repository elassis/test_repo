const Calculator = require('./calculator.js');

const calulator = new Calculator();

describe('My Class Calculator', ()=>{
    test('add', ()=>{
        expect(calulator.add(1,2)).toBe(3);
    });
    test('add', ()=>{
        expect(calulator.add(5,4)).toBe(9);
    });
    test('add', ()=>{
        expect(calulator.add(10,14)).toBe(24);
    });

    test('substract',()=>{
        expect(calulator.substract(5,2)).toBeLessThan(4);
    });

    test('Multiple',()=>{
        expect(calulator.multiply(5,2)).toEqual(10);
    });

    test('divide',()=>{
        expect(calulator.substract(5,2)).toBe(3);
    });
});