const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions');

test('returnTwo result should equal 2', () => {
    let result = returnTwo();
    expect(result).toEqual(2);
});

describe('greeting tests', () => {
    test('greeting(James) should return Hello, James', () => {
        let result = greeting('James');
        expect(result).toEqual('Hello, James');
    });
    test('greeting(Jill) should return Hello, Jill', () => {
        let result = greeting('Jill');
        expect(result).toEqual('Hello, Jill');
    });
});

describe('Math tests', () => {
    test('add(5,9) should equal 14', () => {
        let result = add(5, 9);
        expect(result).toEqual(14);
    });
    test('multiply(5,9) should equal 45', () => {
        let result = multiply(5, 9);
        expect(result).toEqual(45);
    });
    test('divide(45,9) should equal 5', () => {
        let result = divide(45, 9);
        expect(result).toEqual(5);
    });
    test('subtract(9,5) should equal 4', () => {
        let result = subtract(9, 5);
        expect(result).toEqual(4);
    });
});
