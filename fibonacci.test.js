const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});


test('When initialized not specified the next number can be returned', () => {
    fibonacci.init();
    expect(fibonacci.next()).toBe(1);
});


test('When initialized the next number can be returned', () => {
    fibonacci.init(2);
    expect(fibonacci.next()).toBe(3);
});

test('When initialized the next number can be returned when skipped by 1', () => {
    fibonacci.init(2);
    expect(fibonacci.skip(1)).toBe(3);
});


test('When initialized skip through 2 numbers and the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.skip(2)).toBe(21);
});

test('When initialized, check the current number', () => {
    fibonacci.init(8);
    expect(fibonacci.init()).toBe(8);
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(0);
    expect(fibonacci.skip(3)).toBe(2);
})


// test('When initialized the next number can be returned', () => {
//     fibonacci.init(0);
//     expect(fibonacci.skip(3)).toBe(2);
// });