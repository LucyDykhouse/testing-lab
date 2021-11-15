const {
    returnTwo,
    greeting,
    add
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

describe('add tests', () => {
    test('add(1,2) should equal 3', () => {
        let result = add(1, 2);
        expect(result).toEqual(3);
    });
    test('add(5,9) should equal 14', () => {
        let result = add(5, 9);
        expect(result).toEqual(14);
    });
});
