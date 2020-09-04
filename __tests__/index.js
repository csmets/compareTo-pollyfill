require('../src');

describe('Test string compareTo functionality', () => {

    it('should give correct result', () => {
        const string = 'test';
        const result = string.compareTo('hello');
        expect(result).toEqual(12);
    });

    it('should give correct result using space character', () => {
        const string = 'Hi, Anna';
        const result = string.compareTo('Hi,Tom');
        expect(result).toEqual(116);
    });

    it('should return 0 if characters are the same', () => {
        const string = 'H';
        const result = string.compareTo('H');
        expect(result).toEqual(0);
    });

    it('should not allow null values', () => {
        const string = 'test';
        expect(() => { string.compareTo(null) }).toThrow();
        expect(() => { null.compareTo('test') }).toThrow();
        expect(() => { null.compareTo(null) }).toThrow();
    });

});
