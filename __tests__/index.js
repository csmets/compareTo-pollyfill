require('../src');

describe('Test string compareTo functionality', () => {

    it('should give correct result', () => {
        const string = 'test';
        const result = string.compareTo('hello');
        expect(result).toEqual(12);
    });

    it('should not allow null values', () => {
        const string = 'test';
        expect(() => { string.compareTo(null) }).toThrow();
        expect(() => { null.compareTo('test') }).toThrow();
        expect(() => { null.compareTo(null) }).toThrow();
    });

});
