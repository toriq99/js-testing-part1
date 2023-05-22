const cloneArray = require('./cloneArray');


test('should be duplicate array given', () => {
    const arr = [1,2,3]
    expect(cloneArray(arr)).toMatchObject(arr);
});

